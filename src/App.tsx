import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Education from './components/sections/Education'
import TechStack from './components/sections/TechStack'
import Contact from './components/sections/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <TechStack />
      <Contact />
    </Layout>
  )
}

export default App
