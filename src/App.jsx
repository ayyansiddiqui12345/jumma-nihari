import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="website">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Menu />

        <Location />

        <section className="order-section" id="order">

          <div className="order-glow"></div>

          <div className="order-content">

            <div className="section-label">
              READY TO ORDER?
            </div>

            <h2>
              Your Nihari
              <span>Awaits.</span>
            </h2>

            <p>
              Authentic flavors, traditional preparation,
              and the taste Karachi loves.
            </p>

            <a href="#menu" className="order-button">
              Order Your Meal
            </a>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;