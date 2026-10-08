import { Link } from "react-router-dom";
import { Section } from "../../shared/layout";

import linkedInIcon from "../../assets/images/footer/social-link/linkedInIcon.png";
import faceBookIcon from "../../assets/images/footer/social-link/faceBookIcon.png";
import instagramIcon from "../../assets/images/footer/social-link/instagramIcon.png";
import youtubeIcon from "../../assets/images/footer/social-link/youtubeIcon.png";

import styles from "./SiteFooter.module.css";

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Charging Management Solution", href: "#" },
      { label: "EV User App", href: "#" },
      { label: "Operator App", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Home Charging", href: "#" },
      { label: "Fleet Charging", href: "#" },
      { label: "Public Charging", href: "#" },
      { label: "Highway Charging", href: "#" },
      { label: "AMC & Support", href: "#" },
    ],
  },
  {
    title: "Aries Chargers",
    links: [
      {
        label: "Aries 7kW",
        href: "/products/ac-ev-charger-aries-7",
      },
      {
        label: "Aries 7.4kW",
        href: "/products/ac-ev-charger-aries-74",
      },
      {
        label: "Aries 11kW",
        href: "/products/ac-ev-charger-aries-11",
      },
      {
        label: "Aries 22kW",
        href: "/products/ac-ev-charger-aries-22",
      },
    ],
  },
  {
    title: "Polaris Chargers",
    links: [
      {
        label: "Polaris 30kW",
        href: "/products/dc-fast-charger-polaris-30",
      },
      {
        label: "Polaris 60kW",
        href: "/products/dc-ev-charger-polaris-60",
      },
      {
        label: "Polaris 90kW",
        href: "/products/dc-fast-ev-charger-polaris-90",
      },
      {
        label: "Polaris 120kW",
        href: "/products/dc-fast-charger-polaris-120",
      },
      {
        label: "Polaris 180kW",
        href: "/products/dc-fast-charger-polaris-180",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Emissions Calculator", href: "#" },
    ],
  },
];

const LEGAL_LINKS = ["Accessibility", "Privacy Policy", "Terms of Use"];

export function SiteFooter() {
  return (
    <Section className={styles.section}>
      <footer className={styles.panel}>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Charge the Future with <br />
            <span className={styles.headingAccent}>Best Charg</span>
          </h2>

          <nav className={styles.columns} aria-label="Footer">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className={styles.columnTitle}>{column.title}</h3>

                <ul className={styles.linkList}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link className={styles.link} to={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <ul className={styles.socials}>
            <li>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/company/bestinfra/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={linkedInIcon} alt="" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                className={styles.socialLink}
                href="https://www.facebook.com/people/Best-Charg/61589583270027/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src={faceBookIcon} alt="" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                className={styles.socialLink}
                href="https://www.instagram.com/best_charg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                className={styles.socialLink}
                href="https://www.youtube.com/@Best_Charg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <img src={youtubeIcon} alt="" aria-hidden="true" />
              </a>
            </li>
          </ul>

          <div className={styles.legal}>
            {LEGAL_LINKS.map((item) => (
              <a key={item} className={styles.legalLink} href="#">
                {item}
              </a>
            ))}

            <span className={styles.copyright}>© 2026 Best Charg</span>
          </div>
        </div>
      </footer>

      <div className={styles.watermarkWrap} aria-hidden="true">
        <div className={styles.watermark}>BESTCHARG</div>
      </div>
    </Section>
  );
}

export default SiteFooter;
