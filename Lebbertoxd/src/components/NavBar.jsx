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
    <div className="navbar" style={{ marginTop: "0", paddingTop: "0" }}>
      <h1 className="header" style={{ marginLeft: ".3em" }}>
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
        <AiOutlineUser style={{ marginRight: ".5em" }} />
      </NavLink>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;
