import './App.css';
import Navbar from "./Components/navbar/Navbar";
import HeroPage from "./Components/heropage/HeroPage";
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Qualifications from './Components/qualifications/Qualifications';
// import Projects from './Components/projects/Projects';
// import Certifications from './Components/certifications/Certifications';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage />
      <About />
      <Skills />
      <Qualifications />
      {/* <Projects />
      <Certifications /> */}
      <Footer />
    </div>
  );
}

export default App;
