import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Service from "./pages/Service";
import Mentions from "./pages/Mentions";
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
