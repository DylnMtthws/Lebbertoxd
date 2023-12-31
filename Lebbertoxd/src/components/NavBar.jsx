import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUnorderedList,
} from "react-icons/ai/index";
import "../css/NavBar.css";

function NavBar() {
  return (
    <div className="container">
      <h1 className="header">Lebbertoxd</h1>
      <div className="navbar">
        <NavLink exact to="/" activeClassName="active-link">
          <AiFillHome />
        </NavLink>
        <NavLink to="/search" activeClassName="active-link">
          <AiOutlineSearch />
        </NavLink>
        <NavLink to="/watchlist" activeClassName="active-link">
          <AiOutlineUnorderedList />
        </NavLink>
        <NavLink to="/profile" activeClassName="active-link">
          <AiOutlineUser />
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;
