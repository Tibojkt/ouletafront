import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const MainBanner = () => {
  const [banner, setBanner] = React.useState();
  React.useEffect(() => {
    const getBanner = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/home-banner-2?populate=*`
      );
      setBanner(response.data);
      // console.log(response.data);
    };
    getBanner();
  }, []);
  return (
    <>
      {banner && (
        <div
          className="main-hero-area"
          style={{
            backgroundImage: `url(${banner.data.attributes.bannerBgImg.data.attributes.url})`,
          }}
        >
          <div className="container-fluid">
            <div className="main-hero-content">
              <span
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                {banner.data.attributes.subTitle}
              </span>
              <h1
                data-aos="fade-right"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
                className="ouletatitle"
              >
                {banner.data.attributes.title}
              </h1>
              <h4
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
                className="highlightsubtitle"
              >
                {banner.data.attributes.shortText}
              </h4>

              <ul
                className="hero-btn"
                data-aos="fade-right"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <li>
                  <Link href="/contact">
                    <a className="default-btn">
                      {banner.data.attributes.btnOneText}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainBanner;
