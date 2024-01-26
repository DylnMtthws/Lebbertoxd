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
    <div className="navbar">
      <h1 className="header" style={{ marginLeft: ".5em" }}>
        Lebbertoxd
      </h1>
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
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;
