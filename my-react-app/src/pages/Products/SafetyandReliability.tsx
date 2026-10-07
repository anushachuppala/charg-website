import styles from "./SafetyAndReliability.module.css";
import { Section } from "../../shared/layout";

import safetyImage from "../../assets/products-page/safetyImage.jpg";
import image1 from "../../assets/products-page/image1.png";
import image2 from "../../assets/products-page/image2.png";
import image3 from "../../assets/products-page/image3.png";
import image4 from "../../assets/products-page/image4.png";
import image5 from "../../assets/products-page/image5.png";
import image6 from "../../assets/products-page/image6.png";

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}

import type { Products } from "../../features/ProductsPage/dto/products.dto";

type SafetyAndReliabilityProps = {
  products?: Products;
};

function SafetyAndReliability({ products }: SafetyAndReliabilityProps) {
  console.log("SAFETY PRODUCT:", {
    id: products?.id,
    title: products?.title,
    slug: products?.slug,
    safetyTitle: products?.safetyTitle,
    safetyItems: products?.safetyItems,
  });

  const safetyTags = products?.safetyTags?.length
    ? products.safetyTags
    : ["IEC 61851", "CE", "BIS", "RoHS", "IP54"];

  const fallbackIcons = [image1, image2, image3, image4, image5, image6];

  return (
    <Section className={styles.Section}>
      <img
        src={safetyImage}
        aria-hidden="true"
        className={styles.safetyImage}
      />

      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.heading}>Safety &amp; Reliability</p>

          <h2 className={styles.title}>
            {products?.safetyTitle ||
              "Six layers of protection. Zero compromise."}
          </h2>

          <p className={styles.description}>
            {products?.safetyDescription ||
              "Every Aries unit ships with enterprise-grade protection\ncircuitry validated to international safety standards  so your\nassets, your users, and your vehicles stay safe."}
          </p>

          <ul className={styles.badges}>
            {safetyTags.map((item) => (
              <li key={item} className={styles.badge}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className={styles.grid}>
          {products?.safetyItems.map((feature, index) => (
            <li key={feature.title} className={styles.card}>
              <span className={styles.iconWrap}>
                <img
                  src={feature.icon || fallbackIcons[index]}
                  className={styles.icon}
                  alt=""
                />
              </span>

              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>

              <CheckIcon />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default SafetyAndReliability;
