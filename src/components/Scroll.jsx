import React, { useEffect, useState } from "react";


function ScrollToTop () {
const [showScroll, setShowScroll] = useState(false);

const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
        window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
  },[]);


// Fonction pour remonter en haut de la page
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

return (
  <div className="scroll">
      {showScroll && <button className="btn btn-primary btn-sm btn-scroll" onClick={scrollTop}>Remonter en haut de la page 
        <i className="fas fa-arrow-up icone-scroll"></i>
      </button>}
</div>

)
}

export default ScrollToTop;