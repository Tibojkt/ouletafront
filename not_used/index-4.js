import React from "react";
import NavbarStyle1 from "not_used/not_used_components/NavbarStyle1";
import MainBanner from "not_used/not_used_components/HomePageDemo1/MainBanner";
import TopServices from "not_used/not_used_components/HomePageDemo1/TopServices";
import AboutOurCompany from "not_used/not_used_components/HomePageDemo1/AboutOurCompany";
import FunFactStyle1 from "@/components/Common/FunFactStyle1";
import OurServices from "not_used/not_used_components/HomePageDemo1/OurServices";
import Infos from "@/components/Common/Infos";
import WhyChooseUsStyle1 from "@/components/Common/WhyChooseUsStyle1";
import TestimonialStyle1 from "@/components/Common/TestimonialStyle1";
import OurExpertise from "not_used/not_used_components/HomePageDemo1/OurExpertise";
import Pricing from "not_used/not_used_components/PricingPlan/Pricing";
import TeamMemberStyle1 from "@/components/Common/TeamMemberStyle1";
import LatestArticles from "@/components/Common/LatestArticles";
import Cta from "not_used/not_used_components/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function Index() {
  return (
    <>
      <NavbarStyle1 />

      <MainBanner />

      <TopServices />

      <AboutOurCompany />

      <FunFactStyle1 />

      <OurServices />

      <Infos />

      <WhyChooseUsStyle1 />

      <TestimonialStyle1 />

      <OurExpertise />

      <Pricing />

      <TeamMemberStyle1 />

      <div className="ptb-100">
        <LatestArticles />
      </div>

      <Cta />

      <Footer />
    </>
  );
}
