import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChevronDown, IoChevronUp, IoMenu, IoClose } from "react-icons/io5";

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
type SeriesId = "polaris" | "voltis";

interface MenuProduct {
  slug: string;
  title: string;
  description: string;
  image: string;
}

interface Series {
  id: SeriesId;
  label: string;
  products: MenuProduct[];
}

interface Category {
  id: CategoryId;
  label: string;
  products?: MenuProduct[];
  series?: Series[];
}

const DEFAULT_DESC = "Explore our smart, reliable EV charging solutions.";

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
        // Updated to match API slug
        slug: "ac-ev-charger-aries-74",
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
    series: [
      {
        id: "polaris",
        label: "Polaris Series",
        products: [
          {
            // Updated to match API slug
            slug: "dc-fast-charger-polaris-30",
            title: "Polaris 30kW",
            description: "Entry-level DC charging for urban mobility",
            image: polaris30kw,
          },
          {
            slug: "dc-ev-charger-polaris-60",
            title: "Polaris 60kW",
            description: "Reduce charging time and keep vehicles moving",
            image: polaris60kw,
          },
          {
            // Updated to match API slug
            slug: "dc-fast-ev-charger-polaris-90",
            title: "Polaris 90kW",
            description: "Optimized for busy public charging locations",
            image: polaris90kw,
          },
          {
            // Updated to match API slug
            slug: "dc-fast-charger-polaris-120",
            title: "Polaris 120kW",
            description: DEFAULT_DESC,
            image: polaris120kw,
          },
          {
            // Updated to match API slug
            slug: "dc-fast-charger-polaris-180",
            title: "Polaris 180kW",
            description: DEFAULT_DESC,
            image: polaris180kw,
          },
        ],
      },
      {
        id: "voltis",
        label: "Voltis Series",
        products: [
          {
            // Updated to match API slug
            slug: "voltis-60-90kw-dc-fast-charger",
            title: "Voltis 60-90kW",
            description: DEFAULT_DESC,
            image: voltis60kw,
          },
          {
            // Updated to match API slug
            slug: "voltis-90-120kw-dc-fast-charger",
            title: "Voltis 90-120kW",
            description: DEFAULT_DESC,
            image: voltis90kw,
          },
          {
            // Updated to match API slug
            slug: "voltis-120-180kw-dc-fast-charger",
            title: "Voltis 120-180kW",
            description: DEFAULT_DESC,
            image: voltis120kw,
          },
          {
            // Updated to match API slug
            slug: "voltis-240kw-dc-fast-charger",
            title: "Voltis 240kW",
            description: DEFAULT_DESC,
            image: voltis240kw,
          },
        ],
      },
    ],
  },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId>("ac");
  const [activeSeries, setActiveSeries] = useState<SeriesId>("polaris");

  const { pathname } = useLocation();

  const closeAll = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

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

  const visibleProducts: MenuProduct[] = currentCategory.series
    ? (
        currentCategory.series.find((s) => s.id === activeSeries) ??
        currentCategory.series[0]
      ).products
    : (currentCategory.products ?? []);

  return (
    <>
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}

      {productsOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setProductsOpen(false)}
          aria-hidden="true"
        />
      )}

      <header>
        <nav className={styles.navbar}>
          <div className={styles.logocontainer}>
            <Link to="/" onClick={closeAll}>
              <img
                src={logo}
                alt="Best Charg Logo"
                className={styles.logoimage}
              />
            </Link>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>

          <ul
            className={`${styles.navlinks} ${
              menuOpen ? styles.navlinksOpen : ""
            }`}
          >
            {/* Products */}
            <li className={styles.menu}>
              <div
                className={`${styles.trigger} ${
                  isProductsActive ? styles.triggerActive : ""
                }`}
              >
                <Link to="/products/ac-ev-charger-aries-11" onClick={closeAll}>
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
                  {/* Categories */}
                  <div className={styles.categories}>
                    {CATEGORIES.map((category) => {
                      const isActive = category.id === activeCategory;
                      const hasSeries = Boolean(category.series);

                      return (
                        <div key={category.id}>
                          <button
                            type="button"
                            className={`${styles.category} ${
                              isActive ? styles.categoryActive : ""
                            }`}
                            onClick={() => setActiveCategory(category.id)}
                            aria-pressed={isActive}
                            aria-expanded={hasSeries ? isActive : undefined}
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

                            {hasSeries && (
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveCategory(category.id);
                                }}
                              >
                                {isActive ? (
                                  <IoChevronUp
                                    size={14}
                                    color="#ffffff"
                                    className={styles.categoryChevron}
                                  />
                                ) : (
                                  <IoChevronDown
                                    size={14}
                                    color="#ffffff"
                                    className={styles.categoryChevron}
                                  />
                                )}
                              </span>
                            )}
                          </button>

                          {isActive && category.series && (
                            <ul className={styles.seriesList}>
                              {category.series.map((series) => {
                                const isSeriesActive =
                                  series.id === activeSeries;

                                return (
                                  <li key={series.id}>
                                    <button
                                      type="button"
                                      className={`${styles.seriesItem} ${
                                        isSeriesActive
                                          ? styles.seriesItemActive
                                          : ""
                                      }`}
                                      onClick={() => setActiveSeries(series.id)}
                                      aria-pressed={isSeriesActive}
                                    >
                                      <span className={styles.seriesDot} />
                                      {series.label}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className={styles.divider} />

                  {/* Product grid */}
                  <ul className={styles.grid}>
                    {visibleProducts.length === 0 ? (
                      <li className={styles.empty}>No products available.</li>
                    ) : (
                      visibleProducts.map((product) => (
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
