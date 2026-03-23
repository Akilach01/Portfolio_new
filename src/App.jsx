import "./components/styles/global.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
