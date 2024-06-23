import '../assets/styles/Blog.css'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ImageDynamic from '../components/ImageDynamic.jsx';
import blog1 from '../assets/images/blog/coder.jpg'
import blog2 from '../assets/images/blog/croissance.jpg'
import blog3 from '../assets/images/blog/google.jpg'
import blog4 from '../assets/images/blog/screens.jpg'
import blog5 from '../assets/images/blog/seo.jpg'
import blog6 from '../assets/images/blog/technos.png'
import {Link} from 'react-router-dom'


function Blog () {
        return (
            <div className="Blog">
                <Header />
                <main>
                <ImageDynamic />
                <div className="container-fluid">
        <div className="row">
          <div className="col-12 titre-blog">
            <h2>Blog</h2>
            <p>Retrouvez ici quelques articles sur le développement web.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 container-card">
            <div className="card">
              <img
                src={blog1}
                className="card-img-top"
                alt="coder"
              />
              <div className="card-body">
                <h5 className="card-title">Coder son site en HTML/CSS</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-outline-primary">
                  Lire la suite
                </Link>
              </div>
              <p className="card-footer">Publié le 22 août 2022</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 container-card">
            <div className="card">
              <img
                src={blog2}
                className="card-img-top"
                alt="croissance"
              />
              <div className="card-body">
                <h5 className="card-title">Vendre ses produits sur le web</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-outline-primary">
                  Lire la suite
                </Link>
              </div>
              <p className="card-footer">Publié le 20 août 2022</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 container-card">
            <div className="card">
              <img
                src={blog3}
                className="card-img-top"
                alt="google"
              />
              <div className="card-body">
                <h5 className="card-title">Se positionner sur Google</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-outline-primary">
                  Lire la suite
                </Link>
              </div>
              <p className="card-footer">Publié le 1 août 2022</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 container-card">
            <div className="card">
              <img
                src={blog4}
                className="card-img-top"
                alt="screens"
              />
              <div className="card-body">
                <h5 className="card-title">Coder en responsive design</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-outline-primary">
                  Lire la suite
                </Link>
              </div>
              <p className="card-footer">Publié le 31 juillet 2022</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 container-card">
            <div className="card">
              <img
                src={blog5}
                className="card-img-top"
                alt="SEO"
              />
              <div className="card-body">
                <h5 className="card-title">Techniques de référencement</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-outline-primary">
                  Lire la suite
                </Link>
              </div>
              <p className="card-footer">Publié le 30 juillet 2022</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 container-card">
            <div className="card">
              <img
                src={blog6}
                className="card-img-top"
                alt="technos"
              />
              <div className="card-body">
                <h5 className="card-title">Apprendre à coder</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-outline-primary">
                  Lire la suite
                </Link>
              </div>
              <p className="card-footer">Publié le 12 juillet 2022</p>
            </div>
          </div>
        </div>
        </div>

                </main>
                <Footer />
            </div>
        )
}

export default Blog;