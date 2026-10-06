import { useEffect, useState } from "react";
import styles from "./TechnicalSpecifications.module.css";

import { Section, Container, Panel } from "../../shared/layout";
import downloadImage from "../../assets/products-page/downloadImage.png";

import type { Products } from "../../features/ProductsPage/dto/products.dto";

type TechnicalSpecificationsProps = {
  products?: Products;
};

type TabId =
  | "general"
  | "mechanical"
  | "environmental"
  | "communication"
  | "ui"
  | "certifications and standards";

const tabKeyMap: Record<string, TabId> = {
  General: "general",
  Mechanical: "mechanical",
  Environmental: "environmental",
  communication: "communication",
  UI: "ui",
  "Certifications and Standards": "certifications and standards",
};

function TechnicalSpecifications({ products }: TechnicalSpecificationsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("general");

  // Controls whether the dialog is visible
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");

  const closeDialog = () => {
    setIsDialogOpen(false);
    setEmail("");
  };

  const handleDownload = () => {
    // TODO: send `email` to the backend / trigger the spec sheet download
    closeDialog();
  };

  // Close on Escape and lock background scrolling while the dialog is open
  useEffect(() => {
    if (!isDialogOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDialog();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDialogOpen]);

  return (
    <Section>
      <Container>
        <Panel>
          <p className={styles.heading}>Technical Specifications</p>

          <div className={styles.tabsRow}>
            <div className={styles.tabs}>
              {products?.specificationTabs.map((tab) => {
                const tabId = tabKeyMap[tab];

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tabId)}
                    className={`${styles.tab} ${
                      activeTab === tabId ? styles.tabActive : ""
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className={styles.exportBtn}
              onClick={() => setIsDialogOpen(true)}
            >
              <img src={downloadImage} alt="" className={styles.downloadIcon} />
              Export Specifications
            </button>
          </div>

          <div className={styles.specTable}>
            {products?.technicalSpecifications[activeTab]?.map((spec) => (
              <div key={spec.label} className={styles.specRow}>
                <span className={styles.specLabel}>{spec.label}</span>
                <span className={styles.specValue}>{spec.value}</span>
              </div>
            ))}
          </div>
        </Panel>

        {/* Dialog */}
        {isDialogOpen && (
          <div
            className={styles.dialogOverlay}
            onClick={closeDialog}
            role="presentation"
          >
            <div
              className={styles.dialog}
              role="dialog"
              aria-modal="true"
              aria-labelledby="specs-dialog-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeDialog}
                aria-label="Close dialog"
              >
                &times;
              </button>

              <h2 id="specs-dialog-title" className={styles.dialogTitle}>
                Download the Technical Specifications
              </h2>

              <label className={styles.dialogLabel} htmlFor="specs-email">
                Enter your email address:
              </label>

              <input
                id="specs-email"
                type="email"
                className={styles.emailInput}
                placeholder="your@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoFocus
              />

              <div className={styles.dialogFooter}>
                <button
                  type="button"
                  className={styles.skipBtn}
                  onClick={handleDownload}
                >
                  Skip &amp; Download
                </button>

                <button
                  type="button"
                  className={styles.downloadBtn}
                  onClick={handleDownload}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

export default TechnicalSpecifications;
