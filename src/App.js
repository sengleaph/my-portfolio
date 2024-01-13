import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Blank from "./components/blank";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Blank/>
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
