import Header from "./components/Header";
import Services from "./components/Services";
import LogoMarquee from "./components/LogoMarquee";
import Success from "./components/Success";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full bg-[#080808] text-[#f4f4f4] font-sans selection:bg-[#FFC800] selection:text-black relative">
      <Header />
      <Services />
      <LogoMarquee />
      <Success />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
