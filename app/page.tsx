import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Portfolio from "./components/landingPort/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
    </main>
  );
}
