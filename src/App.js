import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Realisations from "./pages/Realisation.jsx";
import Service from "./pages/Service.jsx";
import Mentions from "./pages/Mentions.jsx";
import Scroll from "./components/Scroll.jsx";
import Profil from "./components/Profil.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Accueil /> },
  { path: "/service", element: <Service /> },
  { path: "/realisations", element: <Realisations /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "/mentions", element: <Mentions /> },
  { path: "/profil", element: <Profil /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Scroll />
    </>
  );
}

export default App;
