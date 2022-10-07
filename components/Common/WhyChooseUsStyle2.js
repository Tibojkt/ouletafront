import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const WhyChooseUsStyle2 = () => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it

  // API
  const [chooseUs, setChooseUs] = React.useState();
  React.useEffect(() => {
    const getChooseUs = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/why-choose-us-style-2?populate=*`
      );
      setChooseUs(response.data);
      // console.log(response.data);
    };
    getChooseUs();
  }, []);

  return (
    <>
      {chooseUs && (
        <>
          <div
            className="why-choose-us-area-with-video ptb-100"
            style={{
              backgroundImage: `url(${chooseUs.data.attributes.bgImage.data.attributes.url})`,
            }}
          >
            <div className="container">
              {/* <Map /> */}
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-12"></div>
                <div className="col-lg-6 col-md-12">
                  <div
                    className="why-choose-us-content wrap-color"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <span>{chooseUs.data.attributes.subTitle}</span>
                    <h3>{chooseUs.data.attributes.title}</h3>
                    <ReactMarkdown>
                      {chooseUs.data.attributes.text}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WhyChooseUsStyle2;
