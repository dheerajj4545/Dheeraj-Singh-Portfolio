import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CrystalBackground from "./components/CrystalBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* 🌌 GLOBAL BACKGROUND */}
      <CrystalBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* ✅ FOOTER MUST BE HERE */}
      <Footer />

    </div>
  );
}


export default App;
