import React from "react";
import NavbarStyleInfos from "@/components/Layout/Navbar/NavbarStyleInfos";
import Infos from "@/components/Infos/Infos";
import Footer from "@/components/Layout/Footer/Footer";
import Margin from "../components/Common/Margin";

export default function Informations() {
  return (
    <>
      <NavbarStyleInfos />

      <Margin />

      <Infos />

      <Footer />
    </>
  );
}
