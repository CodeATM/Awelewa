import React from "react";
import { links } from "../Data/dummy";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({setNavMobile}) => {

  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center space-x-12 font-serif uppercase" >
        <li className="nav-link" >
          <Link to ='/home'>Home</Link>
        </li>
        <li className="nav-link" >
          <Link to ='/Shop' onClick={() => setNavMobile(false)}>Shop</Link>
        </li>
        <li className="nav-link" >
          <Link to ='/Policy' onClick={() => setNavMobile(false)}>Policy</Link>
        </li>
        <li className="nav-link" >
          <Link to ='/Blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
