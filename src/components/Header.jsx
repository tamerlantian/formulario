import React, { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const Header = () => {
  const { user, setUser } = useStateContext();
  const activeMenu = true;

  useEffect(() => { 
    setUser(!!localStorage.getItem("username"));
  },[user])

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
        onClick={() => setActiveMenu((prevActiveMenu) => !PrevActiveMenu)}
      >
        <i
          className={`header__btn-icon fi ${activeMenu ? "fi-rr-arrow-left" : "fi-rr-menu-burger"
            }`}
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
