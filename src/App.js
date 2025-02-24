import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialsLinks from "./components/SocialsLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialsLinks />
    </div>
  );
}

export default App;
