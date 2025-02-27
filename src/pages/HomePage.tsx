import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { Stadistics } from "../components/Stadistics";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Info/>
      <Stadistics/>
      <Footer/>
    </>
  );
}

export default HomePage;
