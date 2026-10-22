import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader, WhoIsThisFor } from "../../shared/ui";

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
            title={products?.featuresSectionTitle || "Why ARIES?"}
            subtitle={
              products?.featuresSectionDescription ||
              "More than a charger. A complete charging"
            }
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
