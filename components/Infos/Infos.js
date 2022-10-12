import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";

const Infos = () => {
  const [caseStudies, setCaseStudies] = useState();
  const [hover, setHover] = useState(false);

  React.useEffect(() => {
    const getCaseStudies = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/case-studies?populate=*`
      );
      setCaseStudies(response.data);
      // console.log(response.data);
    };
    getCaseStudies();
  }, []);
  return (
    <>
      <div className="case-study-area-without-color pt-100 pb-75" id="photos">
        <div className="container">
          <div className="section-title">
            <span>Infos</span>
            <h2>Tout ce qu'il faut savoir</h2>
          </div>

          {caseStudies && (
            <div className="row justify-content-center">
              {caseStudies.data.map((caseStudie) => (
                <div className="col-lg-6 col-md-6" key={caseStudie.id}>
                  <div
                    className="single-case-study-card relative"
                    style={{ height: "300px" }}
                  >
                    <Link href={`/infos/${caseStudie.attributes.slug}`}>
                      <a
                        className="relative"
                        style={{ height: "100%", width: "100%" }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Image
                            src={
                              caseStudie.attributes.image.data.attributes.url
                            }
                            alt={
                              caseStudie.attributes.image.data.attributes
                                .alternativeText
                            }
                            // width={456}
                            // height={276}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </a>
                    </Link>
                    <div className="case-study-content">
                      <h3>
                        <Link href={`/infos/${caseStudie.attributes.slug}`}>
                          <a>{caseStudie.attributes.title}</a>
                        </Link>
                      </h3>
                      <Link href={`/infos/${caseStudie.attributes.slug}`}>
                        <a className="case-btn">
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </Link>
                    </div>
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

export default Infos;
