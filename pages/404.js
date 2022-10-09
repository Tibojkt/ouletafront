import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";
import Footer from "@/components/Layout/Footer/Footer";

export default function Custom404() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Erreur 404" homeText="Home" homeUrl="/" />

      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <img src="/images/error.png" alt="erreur" />
            <h3>Erreur 404 : La page n'a pas été trouvée</h3>
            <p>
              La page que vous essayez de voir a peut-être été déplacée,
              supprimée ou elle est indisponible temporairement. Veuillez
              réessayer ultérieurement ou contactez nous pour obtenir de l'aide.
            </p>
            <Link href="/">
              <a className="default-btn">Retour à l'accueil</a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
