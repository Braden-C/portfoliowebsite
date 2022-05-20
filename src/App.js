import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div className="parallax">
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
