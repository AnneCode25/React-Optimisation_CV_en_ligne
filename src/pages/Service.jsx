import "../assets/styles/Service.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ImageDynamic from "../components/ImageDynamic.jsx";

function Service () {

        return (
            <div className="Service">
                <Header />
                <main>
                    <ImageDynamic />
                    <div className="container-fluid-service">
                        <div className="row offre">
                            <div className="col-12 titre-offre">
                                <h2 className="text-center">Mon offre de services</h2>
                                <p className="text-center">Voici les prestations sur lesquelles je peux intervenir</p>
                            </div>
                            <section className="row container-offre">
                                <article className="col-12 col-md-4 col-lg-4">
                                    <i className="fa-solid fa-display icone"></i>
                                    <h2>ux design</h2>
                                    <p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur.
                                    Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                                </article>
                                <article className="col-12 col-md-4 col-lg-4">
                                    <i className="fa-solid fa-file-code icone"></i>
                                    <h2>développement web</h2>
                                    <p>Le <strong>développement de sites web</strong> repose sur l'utilisation des languages HTML, CSS, JavaScript et PHP.</p>
                                </article>
                                <article className="col-12 col-md-4 col-lg-4">
                                    <i className="fa-solid fa-magnifying-glass-dollar icone"></i>
                                    <h2>référencement</h2>
                                    <p>Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <em>améliorer</em> sa <em>position</em> 
                                    dans les résultats des moteurs de recherche.</p>
                                </article>
                            </section>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
}

export default Service;