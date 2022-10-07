import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import MainBanner from "@/components/HomePageDemo2/MainBanner";
import AboutOurCompany from "@/components/HomePageDemo2/AboutOurCompany";
import ServicesCard from "@/components/Services/ServicesCard";
import WhyChooseUsStyle2 from "@/components/Common/WhyChooseUsStyle2";
import Infos from "@/components/infos/Infos";
import FaqContent from "@/components/FaqContent/FaqContent";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";

import Footer from "@/components/Layout/Footer/Footer";

export default function Index2() {
  return (
    <>
      <NavbarStyle2 />

      <MainBanner />

      <AboutOurCompany />

      <WhyChooseUsStyle2 />

      <Infos />

      <ServicesCard />

      <FaqContent />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
