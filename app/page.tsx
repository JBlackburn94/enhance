import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Portfolio from "./components/companyInfo/Company";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </main>
  );
}
