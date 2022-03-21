import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <a className="nav-home" href="#">
        Petit.Mousquetaire
      </a>
      <ul>
        <li>
          <a href="#" class="active">
            Mon Compte
          </a>
        </li>
        <li>
          <a href="#">Stats</a>
        </li>
        <li>
          <a href="#">Information</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
