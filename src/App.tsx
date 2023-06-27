import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Hero />
      <Services />
    </>
  );
}

export default App;
