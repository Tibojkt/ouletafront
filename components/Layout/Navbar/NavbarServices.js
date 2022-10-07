import React from "react";
import Link from "@/utils/ActiveLink";

const NavbarServices = () => {
  return (
    <li className="nav-item">
      <Link href="/services" activeClassName="active">
        <a className="nav-link">
          Services <i className="ri-arrow-down-s-line"></i>
        </a>
      </Link>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <Link href="/services/hebergements/">
            <a className="nav-link">Hébergement</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/services/soins/">
            <a className="nav-link">Les Soins</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/services/restauration/">
            <a className="nav-link">Restauration</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/services/vie-sociale/">
            <a className="nav-link">Vie Sociale</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/services/linge/">
            <a className="nav-link">Linge</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/services/autres-services/">
            <a className="nav-link">Autres Services</a>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default NavbarServices;
