import "../assets/styles/Accueil.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import photoProfil from "../assets/images/photo_de_profil.jpg";

function Accueil() {
  const scrollToAPropos = () => {
    const aPropos = document.getElementById("aPropos");
    aPropos.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="accueil">
      <Header />
      <main>
        <div className="home-container-accueil">
          <div className="background-image-accueil">
            <div className="overlay-accueil">
              <h2>Bonjour, je suis John Doe</h2>
              <h1>Développeur web full stack</h1>
              <button type="button" className="btn btn-primary" onClick={scrollToAPropos}>
                En savoir plus
              </button>
            </div>
          </div>
        </div>
        <section id="aPropos">
        <div className="container mt-5">
          <div className="card-accueil">
            <div className="row no-gutters">
              {/* Première colonne */}
              <div className="col-md-6 col-sm-12">
                <div className="card-body-accueil">
                  <h5 className="card-title-accueil">À propos</h5>
                  <br />
                  <p className="card-text">
                    Passionné par l'informatique et les nouvelles technologies,
                    j'ai suivi une formation d'
                    <strong>intégrateur-développeur web</strong> au CEF. Au
                    cours de cette formation, j'ai pu acquérir des bases solides
                    pour travailler dans le domaine du{" "}
                    <strong>développement web</strong>.
                  </p>
                  <br />
                  <p className="card-text">
                    Basé à Lyon, je suis en recherche d'une alternance au sein
                    d'une agence digitale pour consolider ma formation de{" "}
                    <strong>développeur web full stack</strong>.
                  </p>
                  <br />
                  <p className="card-text">
                    J'accorde une attention particulière à la qualité du code
                    que l'écris et je respecte les bonnes pratiques du web
                  </p>
                </div>
              </div>
              {/* Deuxième colonne */}
              <div className="col-md-6 col-sm-12">
                <div className="card-body-accueil">
                  <img src={photoProfil} className="img-fluid" alt="John Doe" />
                  <div className="card-text mt-3">
                    <h5 className="card-title2">Mes compétences</h5>
                    <p className="card-competences">HTML5 90%</p>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-danger"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <p className="card-competences">CSS3 80%</p>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-info"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <p className="card-competences">JAVASCRIPT 70%</p>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <p className="card-competences">PHP 60%</p>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <p className="card-competences">REACT 50%</p>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;
