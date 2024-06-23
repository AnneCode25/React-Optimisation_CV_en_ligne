import "../assets/styles/Footer.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {

  return (
    <footer>
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-12 col-md-6 col-lg-3">
            <h5>John Doe</h5>
            <adress>
              <p>40 Rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>Téléphone : 06 20 30 40 50</p>
            </adress>
            <div class="reseaux-sociaux">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i
                  className="fa-brands fa-github"
                  style={{ color: "#000000" }}
                ></i>
              </a>
              <a
                href="https://x.com/twiter-john-doe"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i
                  className="fa-brands fa-x-twitter"
                  style={{ color: "#000000" }}
                ></i>
              </a>
              <a
                href="https://linkedin.com/linkedin-john-doe"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: "#000000" }}
                ></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                   Accueil
                </Link>
              </li>
              <li>
                <Link to="/A_propos" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  Me contacter
                </Link>
              </li>
              <li>
                <Link to="/mentions" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  Mentions légales
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/realisations" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  Fresh Food
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  Restaurant Akira
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  Espace bien-être
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/blog" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  Coder son site en HTML/CSS
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  Vendre ses produits sur le web
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-black">
                  <i
                    className="fas fa-chevron-right me-1"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  Se positionner sur Google
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Designed by John Doe</p>
      </div>
    </footer>
  )
}

export default Footer;
