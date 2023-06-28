import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";

import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Faqs } from "./components/Faqs";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Wasatch Pressure Pros: Professional Pressure Washing Services in Utah
        </title>
        <meta
          name="description"
          content="Wasatch Pressure Pros provides top-notch pressure washing services in Utah. Enhance the beauty and value of your property with our superior cleaning solutions"
        />
        <meta
          name="keywords"
          content="Utah Power Washing, Utah Pressure Washing, Power Washing, Wasatch Power Pros, Professional Cleaning, Commercial Power Washing, Residential Power Washing, Power Washing Utah, Pressure, Pressure Washing"
        />
        <meta
          property="og:url"
          content="https://wasatch-pressure-pros.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wasatch Pressure Pros" />
        <meta
          property="og:description"
          content="Wasatch Pressure Pros provides top-notch pressure washing services in Utah. Enhance the beauty and value of your property with our superior cleaning solutions"
        />
      </Helmet>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Services />
        <About />
        <Faqs />
      </main>
    </>
  );
};

export default App;
