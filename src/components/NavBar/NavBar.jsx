import React from "react";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FcStatistics } from "react-icons/fc";
import { BsInfoCircle } from "react-icons/bs";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="nav-home">Petit.Mousquetaire</span>
      </Link>
      <ul className="menu">
        <Link to="/">
          <li>
            <AiOutlineHome className="nav-icon" />
            <span className="nav-text mobile">Accueil</span>
          </li>
        </Link>
        <Link to="/account">
          <li>
            <RiAccountPinCircleLine className="nav-icon" />
            <span className="nav-text active">Mon Compte</span>
          </li>
        </Link>
        <Link to="/stats">
          <li>
            <FcStatistics className="nav-icon" />
            <span className="nav-text">Stats</span>
          </li>
        </Link>
        <Link to="/information">
          <li>
            <BsInfoCircle className="nav-icon" />
            <span className="nav-text">information</span>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <AiOutlinePhone className="nav-icon" />
            <span className="nav-text">contact</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
