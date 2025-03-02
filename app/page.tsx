import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Portfolio from "./components/companyInfo/Company";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Banner />
    </main>
  );
}
