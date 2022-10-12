import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const Introduction = () => {
  const [introduction, setIntroduction] = React.useState();
  React.useEffect(() => {
    const getIntroduction = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/about-our-company-style-2?populate=*`
      );
      setIntroduction(response.data);
      // console.log(response.data);
    };
    getIntroduction();
  }, []);
  return (
    <>
      {introduction && (
        <div className="about-area ptb-100" id="about2">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image-wrap">
                  <img
                    src={
                      introduction.data.attributes.image1.data.attributes.url
                    }
                    alt={
                      introduction.data.attributes.image1.data.attributes
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
                      introduction.data.attributes.image2.data.attributes.url
                    }
                    alt={
                      introduction.data.attributes.image2.data.attributes
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
                  <span>{introduction.data.attributes.sousTitre}</span>
                  <h3>{introduction.data.attributes.titre}</h3>

                  <ReactMarkdown>
                    {introduction.data.attributes.description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Introduction;
