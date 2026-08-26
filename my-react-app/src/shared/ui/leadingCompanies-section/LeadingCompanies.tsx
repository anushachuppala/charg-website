import styles from "./LeadingCompanies.module.css";
import { Section, Panel } from "../../../shared/layout";
import { SectionHeader } from "../section-header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface LeadingCompaniesProps {
  logos: string[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  align?: "start" | "center";
}

function LeadingCompanies({
  logos,
  eyebrow,
  title,
  subtitle,
  showHeader = true,
  align = "center",
}: LeadingCompaniesProps) {
  return (
    <Section className={styles.section}>
      <Panel>
        {showHeader && (
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align={align}
            trailingSpacing="default"
          />
        )}

        <div className={styles.companyImages}>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={7}
            spaceBetween={50}
            allowTouchMove={false}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={`${logo}-${index}`}>
                <img src={logo} alt={`Company logo ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Panel>
    </Section>
  );
}

export default LeadingCompanies;
