import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <span>JUMMA GUJJAR</span>
            <small>NIHARI & PAKWAN</small>
          </a>

          <p>
            Authentic Karachi flavors,
            rooted in tradition and made
            with passion.
          </p>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">

          <h4>EXPLORE</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#location">Location</a>

        </div>


        {/* CONTACT */}

        <div className="footer-column">

          <h4>CONTACT</h4>

          <a href="#location">
            <MapPin size={14} />
            Find Us
          </a>

          <a href="tel:+923000000000">
            <Phone size={14} />
            Call Us
          </a>

          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>

        </div>


        {/* ORDER */}

        <div className="footer-order">

          <span>HUNGRY?</span>

          <h3>
            Order Your
            <strong>Nihari.</strong>
          </h3>

          <a href="#menu">
            Order Now
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <span>
          © 2026 Jumma Gujjar Nihari & Pakwan
        </span>

        <span>
          AUTHENTIC KARACHI CUISINE
        </span>

      </div>

    </footer>
  );
}

export default Footer;