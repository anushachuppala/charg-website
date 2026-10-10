import { useEffect, useState } from "react";
import styles from "./TechnicalSpecifications.module.css";

import { Section, Container, Panel } from "../../shared/layout";
import downloadImage from "../../assets/products-page/downloadImage.png";

import type {
  Products,
  TechnicalSpecificationItem,
} from "../../features/ProductsPage/dto/products.dto";

type TechnicalSpecificationsProps = {
  products?: Products;
};

type TabId =
  | "general"
  | "mechanical"
  | "environment"
  | "communication"
  | "ui"
  | "Certifications And Standards";

const tabKeyMap: Record<string, TabId> = {
  General: "general",
  Mechanical: "mechanical",
  Environmental: "environment",
  Environment: "environment",
  Communication: "communication",
  communications: "communication",
  comminications: "communication",
  UI: "ui",
  "Certifications and Standards": "Certifications And Standards",
  "Certifications And Standards": "Certifications And Standards",
  "Certification and Standards": "Certifications And Standards",
  "Certifications and Standard": "Certifications And Standards",
};

// Generic placeholders, not verified specifications for a specific charger.
const fallbackSpecifications: Record<TabId, TechnicalSpecificationItem[]> = {
  general: [
    { label: "Product Type", value: "EV Charger" },
    { label: "Charging Capacity", value: "Refer to product datasheet" },
  ],
  mechanical: [
    { label: "Dimensions", value: "Refer to product datasheet" },
    { label: "Mounting Type", value: "Refer to product datasheet" },
  ],
  environment: [
    { label: "Operating Temperature", value: "Refer to product datasheet" },
    { label: "Protection Rating", value: "Refer to product datasheet" },
  ],
  communication: [
    { label: "Connectivity", value: "Refer to product datasheet" },
    { label: "Communication Protocol", value: "Refer to product datasheet" },
  ],
  ui: [
    { label: "User Interface", value: "Refer to product datasheet" },
    { label: "User Authentication", value: "Refer to product datasheet" },
  ],
  "Certifications And Standards": [
    { label: "Certifications", value: "Refer to product datasheet" },
    { label: "Applicable Standards", value: "Refer to product datasheet" },
  ],
};

function normalizeTabName(tab: string): string {
  return tab
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function getTabId(tab: string): TabId | undefined {
  const normalizedTab = normalizeTabName(tab);

  const matchingEntry = Object.entries(tabKeyMap).find(
    ([label]) => normalizeTabName(label) === normalizedTab,
  );

  return matchingEntry?.[1];
}

function TechnicalSpecifications({ products }: TechnicalSpecificationsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("general");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");

  const closeDialog = () => {
    setIsDialogOpen(false);
    setEmail("");
  };

  const handleDownload = () => {
    // TODO: Send email to the backend / trigger the specification sheet download.
    closeDialog();
  };

  // Close on Escape and lock background scrolling while the dialog is open.
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

  // Use recognized API tabs first.
  const apiTabs =
    products?.specificationTabs?.filter((tab) => getTabId(tab) !== undefined) ??
    [];

  // Use default tabs if the API has no recognized tabs.
  const specificationTabs =
    apiTabs.length > 0
      ? apiTabs
      : [
          "General",
          "Mechanical",
          "Environmental",
          "Communication",
          "UI",
          "Certifications and Standards",
        ];

  // Keep the active tab valid for the current product.
  const normalizedActiveTab: TabId = specificationTabs.some(
    (tab) => getTabId(tab) === activeTab,
  )
    ? activeTab
    : (getTabId(specificationTabs[0]) ?? "general");

  // Prefer API specifications; use manual fallback if the array is empty.
  const apiSpecifications =
    products?.technicalSpecifications?.[normalizedActiveTab];

  const hasApiSpecifications =
    Array.isArray(apiSpecifications) &&
    apiSpecifications.some((spec) => spec.label?.trim() || spec.value?.trim());

  const specifications = hasApiSpecifications
    ? apiSpecifications
    : fallbackSpecifications[normalizedActiveTab];

  return (
    <Section>
      <Container>
        <Panel>
          <p className={styles.heading}>Technical Specifications</p>

          <div className={styles.tabsRow}>
            <div className={styles.tabs}>
              {specificationTabs.map((tab) => {
                const tabId = getTabId(tab);

                if (!tabId) return null;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tabId)}
                    className={`${styles.tab} ${
                      normalizedActiveTab === tabId ? styles.tabActive : ""
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
            {specifications.map((spec) => (
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
