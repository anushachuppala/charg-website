// import { useState, useEffect, useCallback } from "react";

// import styles from "./OurStrength.module.css";
// import leftArrow from "../../assets/images/About-page/PreviousSlide.png";
// import rightArrow from "../../assets/images/About-page/nextSlide.png";
// import strengthImage from "../../assets/images/About-page/OurStrength.png";
// import ReliabilityImage from "../../assets/images/About-page/Reliability.jpg";
// import DesignedImage from "../../assets/images/About-page/Designed.png";
// import PartnershipImage from "../../assets/images/About-page/Partnership.jpg";
// import { Section, Container, Panel } from "../../shared/layout";
// import iterationIcon from "../../assets/images/About-page/Iteration.png";
// import technologyIcon from "../../assets/images/About-page/nanotechnology.png";
// import arrowIcon from "../../assets/images/About-page/arrow.png";

// import { SectionHeader } from "../../shared/ui/section-header/SectionHeader";

// const slides = [
//   {
//     image: strengthImage,
//     title: "End-to-End EV Infrastructure",
//     description:
//       "From charger manufacturing and installation to software, commissioning, maintenance, and energy integration, we deliver complete EV ecosystems.",
//     features: [
//       {
//         icon: iterationIcon,
//         text: "End-to-End Execution",
//         alt: "Execution",
//       },
//       {
//         icon: technologyIcon,
//         text: "Integrated Technology",
//         alt: "Technology",
//       },
//       {
//         icon: arrowIcon,
//         text: "Built to Scale",
//         alt: "Scale",
//       },
//     ],
//   },

//   {
//     image: ReliabilityImage,
//     title: "Engineered for Reliability",
//     description:
//       "Every charger is designed for continuous operation with industrial-grade components, advanced protection systems, and high uptime in demanding environments.",
//     features: [
//       {
//         icon: iterationIcon,
//         text: "Industrial-Grade Build",
//         alt: "Build",
//       },
//       {
//         icon: technologyIcon,
//         text: "Intelligent Protection",
//         alt: "Protection",
//       },
//       {
//         icon: arrowIcon,
//         text: "High Uptime",
//         alt: "Uptime",
//       },
//     ],
//   },

//   {
//     image: DesignedImage,
//     title: "Designed for India",
//     description:
//       "Optimized for India's power infrastructure, climate, voltage fluctuations, and operational challenges to ensure dependable performance.",
//     features: [
//       {
//         icon: iterationIcon,
//         text: "Grid-Optimized Performance",
//         alt: "Performance",
//       },
//       {
//         icon: technologyIcon,
//         text: "Climate-Ready Engineering",
//         alt: "Engineering",
//       },
//       {
//         icon: arrowIcon,
//         text: "Adapted for Local Needs",
//         alt: "Local Needs",
//       },
//     ],
//   },

//   {
//     image: PartnershipImage,
//     title: " Long-Term Partnership",
//     description:
//       "We don't simply deliver chargers—we become your long-term technology partner with dedicated support, upgrades, and future-ready innovations.",
//     features: [
//       {
//         icon: iterationIcon,
//         text: "Dedicated Customer Support",
//         alt: "Customer Support",
//       },
//       {
//         icon: technologyIcon,
//         text: "Continuous Innovation",
//         alt: "Innovation",
//       },
//       {
//         icon: arrowIcon,
//         text: "Lifecycle Services",
//         alt: "Services",
//       },
//     ],
//   },
// ];

// const loopSlides = [slides[slides.length - 1], ...slides, slides[0]];

// const OurStrength = () => {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [enableTransition, setEnableTransition] = useState(true);

//   console.log("active state:", activeIndex);

//   // Next Slide
//   const nextSlide = useCallback(() => {
//     setActiveIndex((prev) => prev + 1);
//   }, []);

//   // Previous Slide
//   const previousSlide = useCallback(() => {
//     setActiveIndex((prev) => prev - 1);
//   }, []);

//   // Reset cloned slides
//   useEffect(() => {
//     if (activeIndex === loopSlides.length - 1) {
//       setTimeout(() => {
//         setEnableTransition(false);
//         setActiveIndex(1);
//       }, 600);
//     }

//     if (activeIndex === 0) {
//       setTimeout(() => {
//         setEnableTransition(false);
//         setActiveIndex(slides.length);
//       }, 600);
//     }
//   }, [activeIndex]);

//   useEffect(() => {
//     if (!enableTransition) {
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           setEnableTransition(true);
//         });
//       });
//     }
//   }, [enableTransition]);

//   // Autoplay{
//   // useEffect(() => {
//   //   const timer = setInterval(() => {
//   //     nextSlide();
//   //   }, 6000);

//   //   return () => clearInterval(timer);
//   // }, [nextSlide]);

//   return (
//     <Section className={styles.strengthSection}>
//       <Container>
//         <Panel>
//           <div className={styles.strengthContainer}>
//             {/* Heading */}

//             {/* <div className={styles.headingWrapper}>
//               <p className={styles.smallHeading}>OUR STRENGTH</p>

//               <h2 className={styles.heading}>
//                 Why Leading Organizations Choose Best Infra
//               </h2>
//             </div> */}

//             <SectionHeader
//               eyebrow="OUR STRENGTH"
//               title="Why Leading Organizations Choose Best Infra"
//               titleTone="white"
//               as="div"
//             />

//             {/* Slider */}

//             <div className={styles.sliderWrapper}>
//               <div
//                 className={styles.sliderTrack}
//                 style={{
//                   transform: `translateX(-${activeIndex * 100}%)`,
//                   transition: enableTransition ? "transform 0.6s ease" : "none",
//                 }}
//               >
//                 {loopSlides.map((slide, index) => (
//                   <div className={styles.strengthCard} key={index}>
//                     {/* Image */}

//                     <div className={styles.imageWrapper}>
//                       <img
//                         src={slide.image}
//                         alt={slide.title}
//                         className={styles.strengthImage}
//                       />
//                     </div>

//                     {/* Content */}

//                     <div className={styles.contentWrapper}>
//                       <div className={styles.iconCircle}></div>

//                       <h3 className={styles.text}>{slide.title}</h3>

//                       <p className={styles.description}>{slide.description}</p>

//                       <div className={styles.features}>
//                         {slide.features.map((feature, featureIndex) => (
//                           <div
//                             className={styles.featureItem}
//                             key={featureIndex}
//                           >
//                             <span className={styles.featureIcon}>
//                               <img src={feature.icon} alt={feature.alt} />
//                             </span>

//                             <span>{feature.text}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className={styles.controls}>
//               <button
//                 className={`${styles.arrow} ${styles.leftArrow}`}
//                 onClick={previousSlide}
//                 aria-label="Previous slide"
//               >
//                 ‹
//               </button>

//               {/* Right Arrow */}

//               <button
//                 className={`${styles.arrow} ${styles.rightArrow}`}
//                 onClick={nextSlide}
//                 aria-label="Next slide"
//               >
//                 ›
//               </button>
//             </div>

//             {/* Dots */}

//             <div className={styles.dots}>
//               {slides.map((_, index) => (
//                 <span
//                   key={index}
//                   onClick={() => setActiveIndex(index + 1)}
//                   className={`
//                     ${styles.dot}
//                     ${activeIndex - 1 === index ? styles.activeDot : ""}
//                   `}
//                 />
//               ))}
//             </div>
//           </div>
//         </Panel>
//       </Container>
//     </Section>
//   );
// };

// export default OurStrength;
