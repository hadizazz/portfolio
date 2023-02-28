import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <SocialLinks />

      {/* <Analytics /> */}
      <Analytics debug={false} />
    </div>
  );
}

export default App;
