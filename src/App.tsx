import { Helmet } from "react-helmet";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Wasatch Power Pros: Professional Power Washing Services in Utah
        </title>
        <meta
          name="description"
          content="Wasatch Power Pros provides top-notch power washing services in Utah. Enhance the beauty and value of your property with our superior cleaning solutions"
        />
        <meta
          name="keywords"
          content="Utah Power Washing, Utah Pressure Washing, Power Washing, Wasatch Power Pros, Professional Cleaning, Commercial Power Washing, Residential Power Washing, Power Washing Utah, Pressure, Pressure Washing"
        />
      </Helmet>
      <header>
        <Nav />
      </header>
      <Hero />
      <Services />
    </>
  );
}

export default App;
