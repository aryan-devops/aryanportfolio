import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Experience />
      <Certifications />
      <Contact />
    </Layout>
  );
}

export default App;
