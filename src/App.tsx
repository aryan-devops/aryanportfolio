import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import TechStack from "./components/sections/TechStack";
import Education from "./components/sections/Education";
import Publications from "./components/sections/Publications";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <TechStack />
      <Education />
      <Publications />
      <Certifications />
      <Contact />
    </Layout>
  );
}

export default App;
