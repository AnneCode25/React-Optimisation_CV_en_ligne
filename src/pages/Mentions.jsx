import "../assets/styles/Mentions.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import React from "react";
import { Helmet } from "react-helmet";

function Mentions() {
  return (
    <div className="Mentions">
      <Header />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 titre-mentions">
            <h2>Mentions légales</h2>
            <p></p>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Éditeur du site
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3>John Doe</h3>
                  <address>
                    <p>
                      <i className="fa-solid fa-location-dot"> </i>
                      40 Rue Laure Diebold
                      <br /> 69009 Lyon, France
                    </p>
                    <p>
                      <a href="tel:0620304050" className="telephone">
                        <i className="fa-solid fa-mobile-screen-button"> </i>
                        06 20 30 40 50
                      </a>
                    </p>
                    <a href="mailto:john.doe@gmail.com" className="mail">
                      <i className="fa-solid fa-envelope"></i>john.doe@gmail.com
                    </a>
                  </address>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h3>Always Data</h3>
                  <address>
                    <p>
                      91 rue du Faubourg Saint Honoré
                      <br /> 75008 Paris
                    </p>
                    <a
                      href="https://www.alwaysdata.com/fr/"
                      target="blank"
                      className="always"
                    >
                      <i className="fa-sharp fa-solid fa-globe"></i>
                      www.alwaysdata.com
                    </a>
                  </address>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3>Crédits</h3>
                  <p>Site développé par John Doe, étudiant du CEF.</p>
                  <p>
                    Les images libres sont issues du site{" "}
                    <a
                      href="https://pixabay.com/fr/"
                      target="blank"
                      className="pixabay"
                    >
                      <strong>Pixabay</strong>
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mentions;
