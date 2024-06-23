import "../assets/styles/Header.css";
import {Link, useLocation} from "react-router-dom"

function Header() {

  const location = useLocation();

  return (
    <header>
      <nav
        class="navbar bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            John Doe
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ""}`}>
                  Accueil
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/service" className={`nav-link ${location.pathname === '/service' ? 'active' : ""}`}>
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link  to="/realisations" className={`nav-link ${location.pathname === '/realisations' ? 'active' : ""}`}>
                  Réalisations
                </Link>
              </li>
              <li class="nav-item">
              <Link  to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ""}`}>
                  Blog
                </Link>
              </li>
              <li class="nav-item">
              <Link  to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ""}`}>
                  Me contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
