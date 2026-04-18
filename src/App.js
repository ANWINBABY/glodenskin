import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Marquee from "./components/marquee";
import Services from "./components/services";
import SkinProducts from "./components/skin_products";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <SkinProducts /> 
      <Footer />
    </div>
  );
}

export default App;