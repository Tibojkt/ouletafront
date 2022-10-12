import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import BlogPost3Column from "@/components/BlogPost3Column";
import Footer from "@/components/Layout/Footer/Footer";
import Margin from "@/components/Common/Margin";

export default function Blog() {
  return (
    <>
      <Margin />
      <NavbarStyle2 />

      <BlogPost3Column />

      <Footer />
    </>
  );
}
