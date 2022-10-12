import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import ServicesCard from "@/components/Services/ServicesCard";
import Footer from "@/components/Layout/Footer/Footer";
import Margin from "../components/Common/Margin";

export default function Services() {
  return (
    <>
      <NavbarStyle2 />
      <Margin color={"bg-F9F5F4"} />

      {/* <PageBanner title="Nos Services" homeText="Accueil" homeUrl="/" /> */}

      <ServicesCard />

      <Footer />
    </>
  );
}
