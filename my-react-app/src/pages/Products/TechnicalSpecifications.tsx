import { useEffect, useState } from "react";
import styles from "./TechnicalSpecifications.module.css";

import { Section, Container, Panel } from "../../shared/layout";
import downloadImage from "../../assets/products-page/downloadImage.png";

type TabId =
  | "general"
  | "mechanical"
  | "environmental"
  | "communication"
  | "ui"
  | "certifications";

const TABS: { id: TabId; label: string }[] = [
  { id: "general", label: "General" },
  { id: "mechanical", label: "Mechanical" },
  { id: "environmental", label: "Environmental" },
  { id: "communication", label: "Communication" },
  { id: "ui", label: "UI" },
  { id: "certifications", label: "Certifications and Standards" },
];

const specifications = {
  general: [
    {
      title: "Charging Mode",
      value: "Mode 3 (IEC 61851-1)",
    },
    {
      title: "Input / Output Power and Current Rating",
      value: "7kW / 32A max",
    },
    {
      title: "Input / Output Voltage Rating",
      value: "230Vac, 1 phase, 45~65Hz, L1+N+PE",
    },
    {
      title: "Charging Interface",
      value: "IEC 62196-2 Type 2",
    },
  ],

  mechanical: [
    {
      title: "IP Rating",
      value: "IP55",
    },
    {
      title: "IK Rating",
      value: "IK10",
    },
    {
      title: "Dimensions",
      value: "280 * 280 * 148 mm",
    },
    {
      title: "Installation",
      value: "Wall mounting, Pole mounting (Pole is optional)",
    },
  ],

  environmental: [
    {
      title: "Operating Temperature",
      value: "-30°C to 55°C",
    },
    {
      title: "Storage Temperature",
      value: "-40°C to 85°C",
    },
    {
      title: "Humidity",
      value: "5% to 95% no condensation",
    },
    {
      title: "Altitude",
      value: "≤3000m above sea level",
    },
  ],

  communication: [
    {
      title: "Network Interface",
      value: "4G, WIFI (optional), Ethernet, RS485",
    },
    {
      title: "Protocol (EVSE & Backend)",
      value: "OCPP 1.6J",
    },
  ],

  ui: [
    {
      title: "Display and Support Languages",
      value: "No Display",
    },
    {
      title: "Status Indication",
      value: "LED Indicators",
    },
    {
      title: "User Authentication",
      value: "RFID card, App",
    },
  ],

  certifications: [
    {
      title: "Standards and Compliance",
      value: "IEC 61851-1, IEC 61851-21-2",
    },
    {
      title: "Certifications & Standards",
      value: "CE, AIS-138",
    },
  ],
};

function TechnicalSpecifications() {
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
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.tab} ${
                    activeTab === tab.id ? styles.tabActive : ""
                  }`}
                >
                  {tab.label}
                </button>
              ))}
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
            {specifications[activeTab].map((spec) => (
              <div key={spec.title} className={styles.specRow}>
                <span className={styles.specLabel}>{spec.title}</span>
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
