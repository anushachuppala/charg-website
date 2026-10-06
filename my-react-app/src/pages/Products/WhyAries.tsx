import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader, WhoIsThisFor } from "../../shared/ui";
import reliableIcon from "../../assets/products-page/ReliableProtection.svg";
import smartIcon from "../../assets/products-page/SmartConnectivity.svg";
import advancedIcon from "../../assets/products-page/AdvancedProtection.svg";
import madeIcon from "../../assets/products-page/MadeforIndia.svg";

const items = [
  {
    icon: reliableIcon,
    title: "Reliable Protection",
    description:
      "Industrial-grade design delivering reliable 7kW charging, day and night.",
  },

  {
    icon: smartIcon,
    title: "Smart Connectivity",
    description:
      "Stay connected with Wi-Fi, Ethernet, and 4G. OCPP 1.6J ready for any major CMS.",
  },

  {
    icon: advancedIcon,
    title: "Advanced Protection",
    description:
      "Advanced six-layer safety system for secure and reliable charging.",
  },

  {
    icon: madeIcon,
    title: "Made for India",
    description:
      "Built to withstand dust, impact, voltage fluctuations, and extreme temperatures.",
  },
];

import type { Products } from "../../features/ProductsPage/dto/products.dto";

type WhyAriesProps = {
  products?: Products;
};

function WhyAries({ products }: WhyAriesProps) {
  return (
    <Section>
      <Container>
        <Panel>
          <SectionHeader
            as="div"
            title={products?.featuresSectionTitle || ""}
            subtitle={products?.featuresSectionDescription || ""}
          />

          <WhoIsThisFor
            items={products?.featureCards ?? []}
            showHeader={false}
            columns={4}
            embedded={true}
          />
        </Panel>
      </Container>
    </Section>
  );
}

export default WhyAries;
