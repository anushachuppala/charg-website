import { Section } from "../../shared/layout";

import linkedInIcon from "../../assets/images/footer/social-link/linkedInIcon.png";
import faceBookIcon from "../../assets/images/footer/social-link/faceBookIcon.png";
import instagramIcon from "../../assets/images/footer/social-link/instagramIcon.png";
import youtubeIcon from "../../assets/images/footer/social-link/youtubeIcon.png";

import styles from "./SiteFooter.module.css";

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: ["Charging Management Solution", "EV User App", "Operator App"],
  },
  {
    title: "Services",
    links: [
      "Home Charging",
      "Fleet Charging",
      "Public Charging",
      "Highway Charging",
      "AMC & Support",
    ],
  },
  {
    title: "Aries Chargers",
    links: ["Aries 7kW", "Aries 7.4kW", "Aries 11kW", "Aries 22kW"],
  },
  {
    title: "Polaris Chargers",
    links: [
      "Polaris 30kW",
      "Polaris 60kW",
      "Polaris 90kW",
      "Polaris 120kW",
      "Polaris 180kW",
    ],
  },
  {
    title: "Resources",
    links: ["Blog", "Emissions Calculator"],
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
                    <li key={link}>
                      <a className={styles.link} href="#">
                        {link}
                      </a>
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
