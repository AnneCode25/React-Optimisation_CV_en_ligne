import "../assets/styles/Contact.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
function Contact() {
  return (
    <div className="meContacter">
      <Header />
      <main>
        <div className="home-container-contact">
          <div className="background-image-contact">
            <div className="overlay-contact">
              <div className="titre-contact">
                <h2>Me contacter</h2>
                <p>
                  Pour me contacter en vue d'un ensemble ou d'une future
                  collaboration, merci de remplir le formulaire de contact.
                </p>
              <div className="contact-content">
                <div className="contact-form">
                  <h3>Formulaire de contact</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name"></label>
                      <input
                        type="text"
                        className="name"
                        id="name"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email"></label>
                      <input
                        type="email"
                        className="email"
                        id="email"
                        placeholder="Votre adresse email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telephone"></label>
                      <input
                        type="tel"
                        className="téléphone"
                        id="telephone"
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sujet"></label>
                      <input
                        type="text"
                        className="sujet"
                        id="sujet"
                        placeholder="Sujet"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message"></label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Votre message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-contact"><strong>Envoyer</strong></button>
                  </form>
                </div>
                <div className="contact-info">
                  <h3>Mes coordonnées</h3>
                  <address>
                    <i className="fa-solid fa-location-dot">
                      {" "}
                      <span>40 Rue Laure Diebold, 69009 Lyon, France</span>
                    </i>
                    <i className="fa-solid fa-mobile-screen-button">
                      {" "}
                      <span>06 20 30 40 50</span>
                    </i>
                  </address>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754099!2d4.796403976643226!3d45.77866571240162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1719059881625!5m2!1sfr!2sfr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Localisation adresse John Doe"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
