import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const ServicesCard = () => {
  const [services, setServices] = React.useState();
  React.useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(`${baseApiUrl}/api/services?populate=*`);
      setServices(response.data);
      // console.log(response.data);
    };
    getServices();
  }, []);

  return (
    <>
      <div className="services-area pt-100 pb-75 bg-F9F5F4" id="services">
        <div className="container">
          <div className="section-title">
            <span>Nos services</span>
            <h2>La résidence Ouléta propose les services suivants:</h2>
          </div>

          {services && (
            <div className="row justify-content-center ">
              {services.data.map((service) => (
                <div
                  className="col-lg-4 col-md-6 "
                  key={service.id}
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <div
                    className="single-services-card"
                    style={{
                      background: `linear-gradient(90deg, rgba(69,69,74,0.10) 0%, rgba(122,123,125,0.15) 100%), url(${service.attributes.image.data.attributes.formats.small.url})`,
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "100%",
                      backgroundPosition: "50% 0",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="icon">
                      <i className={service.attributes.icon}></i>
                    </div>

                    <h3>
                      <Link href={`/services/${service.attributes.slug}`}>
                        <a>{service.attributes.title}</a>
                      </Link>
                    </h3>
                    <p>{service.attributes.shortText}</p>
                    <Link href={`/services/${service.attributes.slug}`}>
                      <a className="services-btn">
                        {service.attributes.btnText}
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
