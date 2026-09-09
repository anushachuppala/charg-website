import { useState, useEffect, useCallback } from "react";

import styles from "./OurStrength.module.css";

import { Section, Container, Panel } from "../../shared/layout";

import { SectionHeader } from "../../shared/ui/section-header/SectionHeader";

import { getAboutUs } from "../../features/AboutUsPage/api/aboutUs.http";
import type { AboutUsWire } from "../../features/AboutUsPage/api/aboutUs.api.types";

const OurStrength = () => {
  const [aboutUs, setAboutUs] = useState<AboutUsWire | null>(null);

  const [activeIndex, setActiveIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  // Get slides from API
  const slides = aboutUs?.strengthCards ?? [];

  // Create cloned slides for infinite looping
  const loopSlides =
    slides.length > 0 ? [slides[slides.length - 1], ...slides, slides[0]] : [];

  // Fetch About Us data
  useEffect(() => {
    async function fetchAboutUs() {
      try {
        const data = await getAboutUs();

        setAboutUs(data[0]);
      } catch (error) {
        console.error("Failed to fetch About Us data:", error);
      }
    }

    fetchAboutUs();
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
  }, []);

  const previousSlide = useCallback(() => {
    setActiveIndex((prev) => prev - 1);
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    if (activeIndex === loopSlides.length - 1) {
      setTimeout(() => {
        setEnableTransition(false);
        setActiveIndex(1);
      }, 600);
    }

    if (activeIndex === 0) {
      setTimeout(() => {
        setEnableTransition(false);
        setActiveIndex(slides.length);
      }, 600);
    }
  }, [activeIndex, slides.length, loopSlides.length]);

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  }, [enableTransition]);

  return (
    <div className={styles.strengthSection}>
      <Section>
        <Container>
          <Panel>
            <div className={styles.strengthContainer}>
              <SectionHeader
                eyebrow={aboutUs?.strengthSectionTitle || "OUR STRENGTH"}
                title={
                  aboutUs?.strengthSectionSubtitle ||
                  "Why Leading Organizations Choose Best Infra"
                }
                titleTone="white"
                as="div"
              />

              {/* Slider */}
              <div className={styles.sliderWrapper}>
                <div
                  className={styles.sliderTrack}
                  style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                    transition: enableTransition
                      ? "transform 0.6s ease"
                      : "none",
                  }}
                >
                  {loopSlides.map((slide, index) => (
                    <div className={styles.strengthCard} key={index}>
                      {/* Image */}
                      <div className={styles.imageWrapper}>
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className={styles.strengthImage}
                        />
                      </div>

                      {/* Content */}
                      <div className={styles.contentWrapper}>
                        <div className={styles.titleRow}>
                          <div className={styles.iconCircle}></div>

                          <h3 className={styles.text}>{slide.title}</h3>
                        </div>

                        <p className={styles.description}>{slide.subtitle}</p>

                        <div className={styles.features}>
                          {slide.items.map((item, itemIndex) => (
                            <div className={styles.featureItem} key={itemIndex}>
                              <span className={styles.featureIcon}>
                                <img src={item.icon} alt={item.description} />
                              </span>

                              <span>{item.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className={styles.controls}>
                <button
                  className={`${styles.arrow} ${styles.leftArrow}`}
                  onClick={previousSlide}
                  aria-label="Previous slide"
                >
                  ‹
                </button>

                <button
                  className={`${styles.arrow} ${styles.rightArrow}`}
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  ›
                </button>
              </div>

              {/* Dots */}
              <div className={styles.dots}>
                {slides.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setActiveIndex(index + 1)}
                    className={`
                      ${styles.dot}
                      ${activeIndex - 1 === index ? styles.activeDot : ""}
                    `}
                  />
                ))}
              </div>
            </div>
          </Panel>
        </Container>
      </Section>
    </div>
  );
};

export default OurStrength;
