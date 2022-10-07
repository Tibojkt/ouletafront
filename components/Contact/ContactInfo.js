import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-information-area pt-100 pb-75" id="contact">
        <div className="container">
          <div className="section-title">
            <span>Contact</span>
            <h2>
              {" "}
              N'hésitez pas à nous contacter pour en savoir davantage sur notre
              résidence
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-map-pin-line"></i>
                </div>
                <h3>Adresse</h3>
                <p>Avenue Olympe de Gouges, 05400, Veynes (Hautes-Alpes)</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-mail-line"></i>
                </div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:email@veynes.fr">email@veynes.fr</a> <br />{" "}
                  <a href="mailto:email@veynes.fr">email@veynes.fr</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-phone-line"></i>
                </div>
                <h3>Numéro de téléphone</h3>
                <p>
                  <a href="tel:91298765436543">04 75 47 56 54</a> <br />{" "}
                  <a href="tel:91298765436766">04 75 47 56 54</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-time-line"></i>
                </div>
                <h3>Horaires d'ouvertures</h3>
                <p>
                  Ouvert tous les jours <br /> De 9h à 17h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
