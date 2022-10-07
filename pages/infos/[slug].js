import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import InfosDetailsContent from "@/components/Infos/InfosDetailsContent";
import Footer from "@/components/Layout/Footer/Footer";
import baseApiUrl from "@/utils/baseApiUrl";

const InfosDetails = ({ caseStudie: { data } }) => {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner
        title={data[0].attributes.title}
        homeText="Home"
        homeUrl="/"
      />

      <InfosDetailsContent {...data[0]} />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseApiUrl}/api/case-studies`);
  const { data } = await res.json();
  // console.log(data);
  const paths = data.map((caseStudie) => ({
    params: { slug: caseStudie.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/case-studies?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const caseStudie = await res.json();
  // By returning { props: { caseStudie } }, the Blog component
  // will receive `caseStudie` as a prop at build time
  return {
    props: {
      caseStudie,
    },
  };
}

export default InfosDetails;
