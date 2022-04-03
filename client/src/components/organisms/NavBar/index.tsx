import React from "react";
import { NavBarContainer } from "./style";
import { Link } from "react-router-dom";
import Logo from "../../../static/icons/logo.svg";

const NavBar = () => {
  return (
    <NavBarContainer>
      <div>
        <img src={Logo} alt="리액트쿼리로고" />
        <Link to="/">React Query CRUD</Link>
      </div>
      <Link to="/create">+ Add new Book</Link>
    </NavBarContainer>
  );
};

export default NavBar;
