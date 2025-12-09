import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider } from "./common/ThemeContext.jsx"; // ✅ Import the provider

function App() {
  return (
    <ThemeProvider>
      {/* Wrap everything inside ThemeProvider */}
      <>
        <NavBar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
