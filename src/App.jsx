import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Flexdevs Technologies — Frontend Engineering Experts</title>
      </Helmet>

      <Navbar />

      <main>
        <section id="home"><Home /></section>
        <section id="services"><Services /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </>
  );
}
