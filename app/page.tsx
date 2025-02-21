
import About from "./components/About";
import ExperienciaProfissionalSection from "./components/ExperienciaProffisionalSection";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <main className="h-screen">
      <Hero />
      <About />
      <ExperienciaProfissionalSection />
    </main>
  );
}
