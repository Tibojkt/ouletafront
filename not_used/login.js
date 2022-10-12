import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import LoginForm from "not_used/not_used_components/authentication/LoginForm";
import Footer from "@/components/Layout/Footer/Footer";

export default function Login() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Login" homeText="Home" homeUrl="/" />

      <LoginForm />

      <Footer />
    </>
  );
}
