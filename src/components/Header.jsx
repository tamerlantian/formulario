import React, { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useStateContext();
  const navigate = useNavigate()
  const activeMenu = true;

  useEffect(() => {
    setUser(!!localStorage.getItem("username"));
  }, [user])

  const handleLogout = () => {
    localStorage.removeItem('rol')
    localStorage.removeItem('username')
    setUser(false)
    setRol("")
  }


  return (
    <header className="header">
      <button
        className="header__btn"
        onClick={() => navigate(-1)}
      >
        <i
          className={"header__btn-icon fi fi-rr-arrow-left"}
        ></i>
      </button>
      {user ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Sign Out
        </button>
      ) : (
        <button className="btn btn-primary">
          Sign In
        </button>
      )}
    </header>
  );
};

export default Header;
