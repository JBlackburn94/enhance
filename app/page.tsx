import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Portfolio from "./components/companyInfo/Company";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Banner />
      <Footer />
    </main>
  );
}
