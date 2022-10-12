import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import TeamMember from "not_used/not_used_components/Team/TeamMember";
import Cta from "not_used/not_used_components/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function Team() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Our Team" homeText="Home" homeUrl="/" />

      <TeamMember />

      <Cta />

      <Footer />
    </>
  );
}
