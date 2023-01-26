import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-primary font-primary text-white p-6 flex flex-col items-center overflow-y-scroll scrollbar-hide">
      <div className="max-w-[1440px] w-full">
        {/* Navbar */}
        <Navbar />
        {/*  Hero section */}
        <Hero />
        {/* Skills */}
        <div>
          <Skills />
          {/*  Projects */}
          <Projects />
          {/* About */}
        </div>
      </div>
    </div>
  );
}

export default App;
