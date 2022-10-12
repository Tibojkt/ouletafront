import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import baseApiUrl from "@/utils/baseApiUrl";
import Link from "next/link";

const alertContent = () => {
  MySwal.fire({
    title: "Envoyé!",
    text: "Votre candidature a bien été reçue et nous allons vous répondre dans les meilleurs délais",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  nom: "",
  prenom: "",
  email: "",
  numero: "",
  sujet: "",
  texte: "",
};

const ContactForm = () => {
  const [blogs, setBlogs] = React.useState();
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?fields=title`);
      setBlogs(response.data);
      // console.log(response.data);
    };
    getBlogs();
  }, []);

  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { nom, prenom, email, numero, sujet, texte, offre } = contact;
      const payload = { nom, prenom, email, numero, sujet, texte, offre };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Envoyez votre candidature</h2>
            <p>
              CDI, CDD, alternances ou stage, nous recherchons des profils
              variés. Pour nous rejoindre, merci de remplir ce formulaire:
            </p>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group">
                  <label htmlFor="selectOffre">Offre</label>

                  <select
                    className="form-select form-control"
                    id="selectOffre"
                    type="text"
                    name="offre"
                    value={contact.offre}
                    onChange={handleChange}
                    required
                  >
                    {blogs &&
                      blogs.data.map((blog) => {
                        return (
                          <option key={blog.id}>{blog.attributes.title}</option>
                        );
                      })}
                    <option>Candidature spontanée</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Nom *</label>
                    <input
                      type="text"
                      name="nom"
                      className="form-control"
                      value={contact.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Prénom *</label>
                    <input
                      type="text"
                      name="prenom"
                      className="form-control"
                      value={contact.prenom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Numéro de Téléphone *</label>
                    <input
                      type="text"
                      name="numero"
                      className="form-control"
                      value={contact.numero}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Sujet *</label>
                    <input
                      type="text"
                      name="sujet"
                      className="form-control"
                      value={contact.sujet}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Votre Message</label>
                    <textarea
                      name="texte"
                      cols="30"
                      rows="6"
                      className="form-control"
                      value={contact.texte}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Attachez votre CV
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Attachez votre lettre de motivation
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>

                {/* <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkme"
                    />
                    <label className="form-check-label" htmlFor="checkme">
                      J'accepte le
                      <Link href="/terms-of-service">
                        <a>Règlement de Protection des Données Personnelles</a>
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </label>
                  </div>
                </div> */}
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="btn default-btn">
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
