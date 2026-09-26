import { useState, useCallback, useEffect } from "react";

import styles from "./PartnerCards.module.css";

import { Section, Panel } from "../../shared/layout";

import previousSlideIcon from "../../assets/images/About-page/PreviousSlide.png";
import nextSlideIcon from "../../assets/images/About-page/nextSlide.png";

import { SectionHeader } from "../../shared/ui/section-header/SectionHeader";

import { useAboutUsQuery } from "../../features/AboutUsPage/hooks/useAboutUs";

const PartnerCards = () => {
  const { data: aboutUs } = useAboutUsQuery();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const partners = aboutUs?.partners ?? [];

  const totalCards = partners.length;

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1200) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleCards =
    totalCards > 0
      ? Array.from(
          { length: Math.min(cardsPerView, totalCards) },
          (_, index) => partners[(currentIndex + index) % totalCards],
        )
      : [];

  const nextSlide = useCallback(() => {
    if (totalCards === 0) return;

    setCurrentIndex((previousIndex) => {
      return (previousIndex + 1) % totalCards;
    });
  }, [totalCards]);

  const previousSlide = useCallback(() => {
    if (totalCards === 0) return;

    setCurrentIndex((previousIndex) => {
      return (previousIndex - 1 + totalCards) % totalCards;
    });
  }, [totalCards]);

  return (
    <Section>
      <Panel>
        <div className={styles.PartnerHeader}>
          <SectionHeader
            title={aboutUs?.partnersSectionTitle}
            subtitle={aboutUs?.partnersSectionSubtitle}
            align="center"
            as="header"
            trailingSpacing="none"
          />

          <div className={styles.carousel}>
            <img
              src={previousSlideIcon}
              className={styles.arrow}
              onClick={previousSlide}
              alt="Previous partners"
            />

            <div className={styles.ImageContainer}>
              <div className={styles.ImageWrapper}>
                {visibleCards.map((partner, index) => (
                  <div key={index} className={styles.card}>
                    <img
                      src={partner.image.trim()}
                      alt={partner.imageAltText || "Partner"}
                    />
                  </div>
                ))}
              </div>
            </div>

            <img
              src={nextSlideIcon}
              className={styles.arrow}
              onClick={nextSlide}
              alt="Next partners"
            />
          </div>

          <div className={styles.dots}>
            {partners.map((_, index) => (
              <button
                key={index}
                className={currentIndex === index ? styles.activeDot : ""}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to partner ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </Panel>
    </Section>
  );
};

export default PartnerCards;
