import "../assets/styles/Realisation.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import real1 from "../assets/images/portfolio/fresh-food.jpg";
import real2 from "../assets/images/portfolio/restaurant-japonais.jpg";
import real3 from "../assets/images/portfolio/espace-bien-etre.jpg";
import {Link} from 'react-router-dom'
import ImageDynamic from "../components/ImageDynamic.jsx";

function Realisations() {
  return (
    <div className="Realisations">
      <Header />
      <main>
        <ImageDynamic />
        <div className="container-fluid">
        <div className="row">
          <div className="col-12 titre-realisation">
            <h2>Portfolio</h2>
            <p>Voici quelques-unes de mes réalisations.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 container-card">
            <div className="card">
              <img
                src={real1}
                className="card-img-top"
                alt="fresh food"
              />
              <div className="card-body">
                <h5 className="card-title">Fresh food</h5>
                <p className="card-text">
                  Réalisation d'un site avec commande en ligne.
                </p>
                <Link to="#" className="btn btn-outline-primary">
                  Voir
                </Link>
              </div>
              <p className="card-footer">Site réalisé avec PHP et MySQL</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 container-card">
            <div className="card">
              <img
                src={real2}
                className="card-img-top"
                alt="restaurant japonais"
              />
              <div className="card-body">
                <h5 className="card-title">Restaurant akira</h5>
                <p className="card-text">Réalisation d'un site vitrine.</p>
                <Link to="#" className="btn btn-outline-primary">
                  Voir
                </Link>
              </div>
              <p className="card-footer">Site réalisé avec WordPress</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 container-card">
            <div className="card">
              <img
                src={real3}
                className="card-img-top"
                alt="espace bien etre"
              />
              <div className="card-body">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">
                  Réalisation d'un site vitrine pour un practicien de bien-être.
                </p>
                <Link to="#" className="btn btn-outline-primary">
                  Voir
                </Link>
              </div>
              <p className="card-footer">Site réalisé en HTML/CSS</p>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Realisations;
