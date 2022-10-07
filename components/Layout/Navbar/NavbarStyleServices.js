import React from "react";
import Link from "@/utils/ActiveLink";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";
import NavbarServices from "./NavbarServices";

const NavbarStyleServices = () => {
  // Logo API
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/site-logo?populate=*`
      );
      setLogo(response.data);
      // console.log(response.data);
    };
    getLogo();
  }, []);
  // End Logo API

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div
        id="navbar"
        className="shadow-sm navbar-area fixed-top navbar-style-two"
      >
        <div className="main-navbar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              {logo && (
                <Link href="/">
                  <a className="navbar-brand">
                    <Image
                      src={logo.data.attributes.blackLogo.data.attributes.url}
                      alt={
                        logo.data.attributes.blackLogo.data.attributes
                          .alternativeText
                      }
                      width={225}
                      height={60}
                      // className="black-logo"
                    />
                  </a>
                </Link>
              )}

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">Revenir à l'accueil</a>
                    </Link>
                  </li>
                  <NavbarServices />
                </ul>
              </div>

              <div className="others-options d-flex align-items-center">
                {/* <div className="option-item">
                  <form className="search-box">
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Search..."
                    />
                    <button type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div> */}

                <div className="option-item">
                  <Link href="#contact">
                    <a className="default-btn">Contactez-Nous</a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarStyleServices;
