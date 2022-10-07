import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const AboutOurCompany = () => {
  const [aboutCompany, setAboutCompany] = React.useState();
  React.useEffect(() => {
    const getAboutCompany = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/about-our-company-style-2?populate=*`
      );
      setAboutCompany(response.data);
      // console.log(response.data);
    };
    getAboutCompany();
  }, []);
  return (
    <>
      {aboutCompany && (
        <div className="about-area ptb-100" id="about2">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image-wrap">
                  <img
                    src={
                      aboutCompany.data.attributes.image1.data.attributes.url
                    }
                    alt={
                      aboutCompany.data.attributes.image1.data.attributes
                        .alternativeText
                    }
                    width={585}
                    height={600}
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  />
                  <img
                    src={
                      aboutCompany.data.attributes.image2.data.attributes.url
                    }
                    alt={
                      aboutCompany.data.attributes.image2.data.attributes
                        .alternativeText
                    }
                    width={350}
                    height={300}
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  />
                </div>
              </div>

              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="about-content">
                  <span>{aboutCompany.data.attributes.subTitle}</span>
                  <h3>{aboutCompany.data.attributes.title}</h3>

                  <ReactMarkdown>
                    {aboutCompany.data.attributes.shortDescription}
                  </ReactMarkdown>

                  {/* <div className="about-btn">
                    <Link href={aboutCompany.data.attributes.btnLink}>
                      <a className="default-btn">
                        {aboutCompany.data.attributes.btnText}
                      </a>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutOurCompany;
