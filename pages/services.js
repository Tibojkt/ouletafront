import React from "react";
import NavbarStyleServices from "@/components/Layout/Navbar/NavbarStyleServices";
import ServicesCard from "@/components/Services/ServicesCard";
import Footer from "@/components/Layout/Footer/Footer";
import Margin from "../components/Common/Margin";

export default function Services() {
  return (
    <>
      <NavbarStyleServices />
      <Margin color={"bg-F9F5F4"} />

      {/* <PageBanner title="Nos Services" homeText="Accueil" homeUrl="/" /> */}

      <ServicesCard />

      <Footer />
    </>
  );
}
