import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-image-wrap">
        <div className="about-image">
            <img src="/images/nihari.png" alt="Jumma Gujjar Nihari" />

        </div>

        <div className="about-image-frame"></div>

        <div className="about-badge">
          <span>AUTHENTIC</span>
          <strong>KGN</strong>
          <small>KARACHI</small>
        </div>
      </div>


      <div className="about-content">

        <div className="about-label">
          <span></span>
          OUR STORY
        </div>

        <h2>
          A Taste Rooted
          <span>In Tradition.</span>
        </h2>

        <p className="about-lead">
          At Jumma Gujjar Nihari & Pakwan, tradition is more
          than a recipe — it's a way of bringing people
          together.
        </p>

        <p className="about-text">
          From slow-cooked Nihari to freshly prepared
          Pakistani favorites, every dish is made with
          rich flavors, patience and the timeless taste
          Karachi loves.
        </p>


        <div className="about-features">

          <div className="about-feature">
            <strong>01</strong>

            <div>
              <h4>Slow Cooked</h4>
              <p>
                Rich flavor developed through
                traditional preparation.
              </p>
            </div>
          </div>


          <div className="about-feature">
            <strong>02</strong>

            <div>
              <h4>Authentic Flavor</h4>
              <p>
                A taste inspired by Karachi's
                beloved food culture.
              </p>
            </div>
          </div>

        </div>


        <a
          href="#menu"
          className="about-button"
        >
          Explore Our Menu
          <ArrowUpRight size={17} />
        </a>

      </div>

    </section>
  );
}

export default About;