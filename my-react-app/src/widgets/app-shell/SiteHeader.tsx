import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";

import logo from "../../assets/images/About-page/logo.png";
import Button from "../../shared/ui/Button";
import styles from "./SiteHeader.module.css";

import aries7kw from "../../assets/Aries 7kw.png";
import aries74kw from "../../assets/aries-7.4kw.png";
import aries11kw from "../../assets/aries-11kw.png";
import aries22kw from "../../assets/aries-22kw.png";
import polaris30kw from "../../assets/Polaris-30kw.png";
import polaris60kw from "../../assets/polaris-60kw.png";
import polaris90kw from "../../assets/polaris-90kW.png";
import polaris120kw from "../../assets/polaris-120kw.png";
import polaris180kw from "../../assets/polaris-180kw.png";
import voltis60kw from "../../assets/Voltis-60-90kw.png";
import voltis90kw from "../../assets/Voltis-90-120kw.png";
import voltis120kw from "../../assets/Voltis-120-180kw.png";
import voltis240kw from "../../assets/Voltis-240kw.png";

type CategoryId = "ac" | "dc";

interface MenuProduct {
  slug: string;
  title: string;
  description: string;
  image: string;
}

interface Category {
  id: CategoryId;
  label: string;
  products: MenuProduct[];
}

const CATEGORIES: Category[] = [
  {
    id: "ac",
    label: "AC EV Charging Solutions",
    products: [
      {
        slug: "ac-ev-charger-aries-7",
        title: "Aries 7kW",
        description: "Everyday charging for homes and private parking.",
        image: aries7kw,
      },
      {
        slug: "ac-ev-charger-aries-7-4",
        title: "Aries 7.4kW",
        description: "Powerful. Sleek. Public or Private Ready.",
        image: aries74kw,
      },
      {
        slug: "ac-ev-charger-aries-11",
        title: "Aries 11kW",
        description:
          "Balanced performance for workplaces and shared destinations.",
        image: aries11kw,
      },
      {
        slug: "ac-ev-charger-aries-22",
        title: "Aries 22kW",
        description: "Maximum AC power for commercial and fleet operations.",
        image: aries22kw,
      },
    ],
  },
  {
    id: "dc",
    label: "DC EV Charging Solutions",
    products: [
      {
        slug: "dc-ev-charger-polaris-30",
        title: "Polaris 30kW",
        description: "Compact DC fast charging for small commercial sites.",
        image: polaris30kw,
      },
      {
        slug: "dc-ev-charger-polaris-60",
        title: "Polaris 60kW",
        description: "Fast charging for retail, hotels and workplaces.",
        image: polaris60kw,
      },
      {
        slug: "dc-ev-charger-polaris-90",
        title: "Polaris 90kW",
        description: "High-speed charging for busy public locations.",
        image: polaris90kw,
      },
      {
        slug: "dc-ev-charger-polaris-120",
        title: "Polaris 120kW",
        description: "Rapid charging built for highway and fleet hubs.",
        image: polaris120kw,
      },
      {
        slug: "dc-ev-charger-polaris-180",
        title: "Polaris 180kW",
        description: "Ultra-fast charging for high-traffic destinations.",
        image: polaris180kw,
      },
      {
        slug: "dc-ev-charger-voltis-60-90",
        title: "Voltis 60-90kW",
        description: "Flexible split-power DC charging for growing sites.",
        image: voltis60kw,
      },
      {
        slug: "dc-ev-charger-voltis-90-120",
        title: "Voltis 90-120kW",
        description: "Scalable power sharing across multiple vehicles.",
        image: voltis90kw,
      },
      {
        slug: "dc-ev-charger-voltis-120-180",
        title: "Voltis 120-180kW",
        description: "High-capacity charging for large fleets and depots.",
        image: voltis120kw,
      },
      {
        slug: "dc-ev-charger-voltis-240",
        title: "Voltis 240kW",
        description: "Our highest-output charger for demanding operations.",
        image: voltis240kw,
      },
    ],
  },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId>("ac");

  const { pathname } = useLocation();

  const closeAll = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  // Close everything when the route changes
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Close the mega menu with Escape
  useEffect(() => {
    if (!productsOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProductsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [productsOpen]);

  const isProductsActive = productsOpen || pathname.startsWith("/products");
  const currentCategory =
    CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];

  return (
    <>
      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}

      {/* Desktop dim backdrop behind the mega menu */}
      {productsOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setProductsOpen(false)}
          aria-hidden="true"
        />
      )}

      <header>
        <nav className={styles.navbar}>
          {/* Logo */}
          <div className={styles.logocontainer}>
            <Link to="/" onClick={closeAll}>
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
            {/* Products (mega menu) */}
            <li className={styles.menu}>
              <div
                className={`${styles.trigger} ${
                  isProductsActive ? styles.triggerActive : ""
                }`}
              >
                <Link to="/products" onClick={closeAll}>
                  Products
                </Link>

                <button
                  type="button"
                  className={styles.chevronBtn}
                  onClick={() => setProductsOpen((open) => !open)}
                  aria-label="Toggle products menu"
                  aria-expanded={productsOpen}
                >
                  <IoChevronDown
                    className={`${styles.chevron} ${
                      productsOpen ? styles.chevronOpen : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`${styles.panel} ${
                  productsOpen ? styles.panelOpen : ""
                }`}
              >
                <div className={styles.inner}>
                  {/* Left: category tabs */}
                  <div className={styles.categories}>
                    {CATEGORIES.map((category) => {
                      const isActive = category.id === activeCategory;

                      return (
                        <button
                          key={category.id}
                          type="button"
                          className={`${styles.category} ${
                            isActive ? styles.categoryActive : ""
                          }`}
                          onClick={() => setActiveCategory(category.id)}
                          aria-pressed={isActive}
                        >
                          <span
                            className={
                              category.id === "ac"
                                ? styles.acCategoryLabel
                                : styles.dcCategoryLabel
                            }
                          >
                            {category.label}
                          </span>

                          {!isActive && (
                            <IoChevronDown className={styles.categoryChevron} />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className={styles.divider} />

                  {/* Right: product grid */}
                  <ul className={styles.grid}>
                    {currentCategory.products.length === 0 ? (
                      <li className={styles.empty}>No products available.</li>
                    ) : (
                      currentCategory.products.map((product) => (
                        <li key={product.slug}>
                          <Link
                            to={`/products/${product.slug}`}
                            className={styles.card}
                            onClick={closeAll}
                          >
                            <span className={styles.thumb}>
                              <img src={product.image} alt={product.title} />
                            </span>

                            <span className={styles.text}>
                              <span className={styles.title}>
                                {product.title}
                              </span>

                              <span className={styles.desc}>
                                {product.description}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                <p className={styles.footer}>
                  Not Sure ?
                  <Link to="/charging-compatibility" onClick={closeAll}>
                    Check Charging Compatibility
                  </Link>
                </p>
              </div>
            </li>

            {/* Solutions */}
            <li>
              <div className={styles.linkWithChevron}>
                <Link to="/solutions" onClick={closeAll}>
                  Solutions
                </Link>
                <IoChevronDown className={styles.chevron} />
              </div>
            </li>

            {/* Resources */}
            <li>
              <div className={styles.linkWithChevron}>
                <Link to="/Resources" onClick={closeAll}>
                  Resources
                </Link>
                <IoChevronDown className={styles.chevron} />
              </div>
            </li>

            {/* Emission Calculator */}
            <li>
              <Link to="/EmissionCalculator" onClick={closeAll}>
                Emission Calculator
              </Link>
            </li>

            {/* Best Hub */}
            <li>
              <Link to="/besthub" onClick={closeAll}>
                Best Hub
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link to="/about" onClick={closeAll}>
                About Us
              </Link>
            </li>

            {/* Mobile Get Started Button */}
            <li className={styles.mobileButton}>
              <Button variant="primary">Get Started</Button>
            </li>
          </ul>

          {/* Desktop Get Started Button */}
          <div className={styles.desktopButton}>
            <Button variant="primary">Get Started</Button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default SiteHeader;
