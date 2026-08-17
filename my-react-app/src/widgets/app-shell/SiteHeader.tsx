import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";

import logo from "../../assets/images/About-page/logo.png";
import Button from "../../shared/ui/Button";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <header>
        <nav className={styles.navbar}>
          {/* Logo */}
          <div className={styles.logocontainer}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img
                src={logo}
                alt="Best Charg Logo"
                className={styles.logoimage}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>

          {/* Navigation */}
          <ul
            className={`${styles.navlinks} ${
              menuOpen ? styles.navlinksOpen : ""
            }`}
          >
            {/* Products */}
            <li className={styles.productsMenu}>
              <Link to="/products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>

              <IoChevronDown className={styles.icon} />
            </li>

            {/* Solutions */}
            <li>
              <Link to="/solutions" onClick={() => setMenuOpen(false)}>
                Solutions
              </Link>
            </li>

            {/* Best Hub */}
            <li>
              <Link to="/besthub" onClick={() => setMenuOpen(false)}>
                Best Hub
              </Link>
            </li>

            {/* Blog */}
            <li>
              <Link to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>

            {/* Mobile Get Started Button */}
            <li className={styles.mobileButton}>
              <Button text="Get Started" variant="primary" />
            </li>
          </ul>

          {/* Desktop Get Started Button */}
          <div className={styles.desktopButton}>
            <Button text="Get Started" variant="primary" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default SiteHeader;
