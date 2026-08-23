import { ArrowUpRight, Utensils } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-label">
            <span></span>
            AUTHENTIC KARACHI CUISINE
          </div>

          <h1>
            Karachi's
            <strong>Legendary Nihari</strong>
          </h1>

          <p className="hero-description">
            Slow-cooked to perfection, rich in flavor and rooted
            in tradition. Experience the authentic taste of
            Jumma Gujjar Nihari & Pakwan.
          </p>

          <div className="hero-buttons">

            <a href="#menu" className="primary-button">
              <Utensils size={18} />
              Explore Our Menu
            </a>

            <a href="#about" className="secondary-button">
              Our Story
              <ArrowUpRight size={18} />
            </a>

          </div>

          <div className="hero-meta">
            <div>
              <strong>01</strong>
              <span>Authentic<br />Recipe</span>
            </div>

            <div className="meta-divider"></div>

            <div>
              <strong>02</strong>
              <span>Traditional<br />Preparation</span>
            </div>

            <div className="meta-divider"></div>

            <div>
              <strong>03</strong>
              <span>Karachi<br />Favorite</span>
            </div>
          </div>

        </div>

       <div className="hero-image-frame">

  <div className="hero-image">
    <img
      src="/images/hero.png"
      alt="Jumma Gujjar Nihari"
    />
  </div>

  <div className="image-badge">
    <span>JUMMA</span>
    <strong>GUJJAR</strong>
    <small>NIHARI & PAKWAN</small>
  </div>

  <div className="image-accent"></div>

</div>

      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div></div>
      </div>

    </section>
  );
}

export default Hero;