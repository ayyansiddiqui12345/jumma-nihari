import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-name">
            JUMMA GUJJAR
          </span>

          <span className="brand-subtitle">
            NIHARI & PAKWAN
          </span>
        </a>


        <nav
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>

          <a href="#location" onClick={closeMenu}>
            Location
          </a>


        </nav>


        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={27} />
          ) : (
            <Menu size={27} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;