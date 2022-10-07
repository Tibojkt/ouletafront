import React from "react";
import Link from "@/utils/ActiveLink";

const NavbarInfos = () => {
  return (
    <li className="nav-item">
      <Link href="/infos" activeClassName="active">
        <a className="nav-link">
          Infos <i className="ri-arrow-down-s-line"></i>
        </a>
      </Link>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <Link href="/infos/personnel/">
            <a className="nav-link">Notre équipe</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/infos/fonctionnement/">
            <a className="nav-link">Fonctionnement</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/infos/admission/">
            <a className="nav-link">Admission</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/infos/tarifs/">
            <a className="nav-link">Tarifs</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/infos/photos/">
            <a className="nav-link">Photos</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/infos/droits/">
            <a className="nav-link">Droits et Devoirs</a>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default NavbarInfos;
