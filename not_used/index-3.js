import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import MainBanner from "not_used/not_used_components/HomePageDemo3/MainBanner";
import OurExpertise from "not_used/not_used_components/HomePageDemo3/OurExpertise";
import FunFactStyle3 from "@/components/Common/FunFactStyle3";
import OurServices from "not_used/not_used_components/HomePageDemo3/OurServices";
import WhyChooseUsStyle2 from "@/components/Common/WhyChooseUsStyle2";
import Pricing from "not_used/not_used_components/PricingPlan/Pricing";
import Infos from "@/components/Common/Infos";
import AboutOurCompany from "not_used/not_used_components/HomePageDemo3/AboutOurCompany";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import TeamMemberStyle2 from "@/components/Common/TeamMemberStyle2";
import Faq from "@/components/Common/Faq";
import Cta from "not_used/not_used_components/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function Index3() {
  return (
    <>
      <NavbarStyle2 />

      <MainBanner />

      <OurExpertise />

      <FunFactStyle3 />

      <OurServices />

      <WhyChooseUsStyle2 />

      <Pricing />

      <Infos />

      <AboutOurCompany />

      <TestimonialStyle2 />

      <TeamMemberStyle2 />

      <Faq />

      <div className="pt-100">
        <Cta />
      </div>

      <Footer />
    </>
  );
}
