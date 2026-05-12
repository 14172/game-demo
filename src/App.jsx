import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import LoadingScreen from "./components/LoadingScreen";
import Characters1 from "./sections/Characters1";
import Characters2 from "./sections/Characters2";
import Characters3 from "./sections/Characters3";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            loading ? <LoadingScreen /> : <Hero />
          }
        />

        <Route
          path="/characters1"
          element={<Characters1 />}
        />

        <Route
          path="/characters2"
          element={<Characters2 />}
        />

        <Route
          path="/characters3"
          element={<Characters3 />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;