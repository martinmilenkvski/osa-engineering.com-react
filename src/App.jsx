import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Success from "./components/Success";
import NumbersSection from "./components/NumbersSection";
import LogoMarquee from "./components/LogoMarquee";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center">
        <Nav />
        <Routes>
          <Route path="/card" element={<Card />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Services />
                <Success />
                <LogoMarquee />
                <Gallery />
                <Contact />
                <NumbersSection />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
