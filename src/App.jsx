
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Nav />
      <Header />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
