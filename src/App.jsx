import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Success from "./components/Success";
import NumbersSection from "./components/NumbersSection";
import LogoMarquee from "./components/LogoMarquee";
import FAQ from "./components/FAQ";

function App() {
  return (
    <Router>
      {/* light theme 1 */}
      <div className="flex flex-col">
        <Nav />
        <Routes>
         
          <Route
            path="/"
            element={
              <>
                <Header />
                <Services />
                <Success />
                <Gallery />
                <LogoMarquee />
                <NumbersSection />
                <FAQ />
                <Contact />
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
