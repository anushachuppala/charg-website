import { Section, Container } from "../../shared/layout";

import bestChargeLogo from "../../assets/images/About-page/bestCharge.png";
import JioThings from "../../assets/images/About-page/JioThings.png";
import charger from "../../assets/images/About-page/charger.png";
import rectangleImage from "../../assets/images/About-page/Rectangle.png";
import phoneIcon from "../../assets/images/About-page/phoneIcon.png";
import mailIcon from "../../assets/images/About-page/mail.png";
import globeIcon from "../../assets/images/About-page/globe.png";
import handShakeIcon from "../../assets/images/About-page/handshake.png";

import LinkedinIcon from "../../assets/images/About-page/LinkedIn.png";
import FacebookIcon from "../../assets/images/About-page/Facebook.png";
import InstagramIcon from "../../assets/images/About-page/Instagram.png";
import YoutubeIcon from "../../assets/images/About-page/Youtube.png";

import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <Section className={styles.footerContainer}>
      <Container>
        <footer>
          {/* MAIN FOOTER */}
          <div className={styles.footerMain}>
            {/* Contact Card */}
            <div className={styles.contentCard}>
              <img
                src={rectangleImage}
                alt="cardImage"
                className={styles.rectangleImage}
              />

              <div className={styles.cardContent}>
                <h3 className={`h3-primary ${styles.title}`}>
                  How
                  <br />
                  can we help?
                </h3>

                <div className={styles.contentWrapper}>
                  <div className={styles.contentItem}>
                    <img src={phoneIcon} alt="Phone" className={styles.icon} />

                    <div className={styles.contentInfo}>
                      <span>Call Us</span>
                      <p>040 - 40156696</p>
                    </div>
                  </div>

                  <div className={styles.contentItem}>
                    <img src={mailIcon} alt="Mail" className={styles.icon} />

                    <div className={styles.contentInfo}>
                      <span>Mail</span>
                      <p>info@bestinfra.tech</p>
                    </div>
                  </div>

                  <div className={styles.contentItem}>
                    <img
                      src={globeIcon}
                      alt="Location"
                      className={styles.icon}
                    />

                    <div className={styles.contentInfo}>
                      <span>Location</span>

                      <p>
                        #209, 2nd Floor, B-Block, Asian Sun City,
                        <br />
                        Beside Sarath City Capital Mall, Kondapur,
                        <br />
                        Hi-tech City, Hyderabad-500084 Telangana, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charger Image */}
              <img src={charger} alt="Charger" className={styles.charger} />
            </div>

            {/* Right Side Content */}
            <div className={styles.footerRight}>
              {/* Logos */}
              <div className={styles.logosInfo}>
                <div className={styles.logos}>
                  <img
                    src={bestChargeLogo}
                    alt="BestCharg"
                    className={styles.bestChargLogo}
                  />

                  <img
                    src={handShakeIcon}
                    alt="Handshake"
                    className={styles.handshakeLogo}
                  />

                  <img
                    src={JioThings}
                    alt="TruePower"
                    className={styles.truePowerLogo}
                  />
                </div>
              </div>

              {/* Links and Newsletter */}
              <div className={styles.mainColumn}>
                {/* Solutions */}
                <div className={styles.footerColumn}>
                  <h4>Our Solutions</h4>

                  <a href="#">CMS</a>
                  <a href="#">EV Mobile App</a>
                  <a href="#">White Labeled</a>
                  <a href="#">Solution</a>
                  <a href="#">Host App</a>
                  <a href="#">Roaming Solution</a>
                </div>

                {/* Products */}
                <div className={styles.footerColumnTwo}>
                  <h4>Our Products</h4>

                  <a href="#">Aries 7</a>
                  <a href="#">Aries 7.4kW Pro</a>
                  <a href="#">Aries 11</a>
                  <a href="#">Aries 22</a>
                  <a href="#">Polaris 30</a>
                  <a href="#">Polaris 60</a>
                </div>

                {/* Newsletter */}
                <div className={styles.newsletter}>
                  <h4>Newsletter</h4>

                  <p className={styles.description}>
                    From smart metering to substation execution, we ensure
                    compliance, transparency, and measurable outcomes.
                  </p>

                  <div className={styles.subscribeBox}>
                    <input
                      type="email"
                      placeholder="Enter Valid Email Address"
                    />

                    <button type="button">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className={styles.divider}></div>

          {/* BOTTOM FOOTER */}
          <div className={styles.footerBottom}>
            <div className={styles.legalLinks}>
              <a href="#">Accessibility</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>

            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/company/bestinfra/posts/?feedView=all">
                <img
                  src={LinkedinIcon}
                  alt="LinkedIn"
                  className={styles.LinkedIn}
                />
              </a>

              <a href="https://www.facebook.com/people/Best-Charg/61589583270027/#">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className={styles.Facebook}
                />
              </a>

              <a href="https://www.instagram.com/best_charg/">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className={styles.Instagram}
                />
              </a>

              <a href="https://www.youtube.com/@Best_Charg">
                <img
                  src={YoutubeIcon}
                  alt="YouTube"
                  className={styles.Youtube}
                />
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </Section>
  );
}

export default SiteFooter;
