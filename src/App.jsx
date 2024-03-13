import { Link, Route, Routes } from "react-router-dom";

import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/home.jsx"));
const About = lazy(() => import("./pages/about.jsx"));
const Contact = lazy(() => import("./pages/contact.jsx"));
function App() {
  return (
    <div>
      <div style={{ display: "flex", gap: "5rem", justifyContent: "center" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
