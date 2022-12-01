import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { useNavigate, Navigate } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useStateContext();
  const { activeMenu, setActiveMenu } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(!!localStorage.getItem("username"));
  }, [user]);

  const handleLogout = () => {
    setActiveMenu(false);
    navigate('/');
    localStorage.removeItem("rol");
    localStorage.removeItem("username");
    setUser(false);
    setRol("");
  };

  return (
    <header className="header-dash">
      <button className="header__btn" onClick={() => navigate(-1)}>
        <i className={"header__btn-icon fi fi-rr-arrow-left"}></i>
      </button>
      {user ? (
        <button
          className="btn btn-danger"
          onClick={() => {
            handleLogout();
          }}
        >
          Sign Out
        </button>
      ) : (
        <button className="btn btn-primary">Sign In</button>
      )}
    </header>
  );
};

export default Header;
