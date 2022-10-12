import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Layout/Footer/Footer";
import Margin from "@/components/Common/Margin";

export default function Contact() {
  return (
    <>
      <NavbarStyle2 />

      <Margin color={"bg-F9F5F4"} />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
