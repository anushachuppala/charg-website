import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader, WhoIsThisFor } from "../../shared/ui";
import styles from "./smartFeatures.module.css";

import type { Products } from "../../features/ProductsPage/dto/products.dto";

type smartFeaturesProps = {
  products?: Products;
};

function smartFeatures({ products }: smartFeaturesProps) {
  return (
    <Section className={styles.Section}>
      <Container>
        <Panel>
          <SectionHeader
            eyebrow="Smart Features"
            title="Intelligence built in."
          />

          <WhoIsThisFor
            items={products?.smartFeatureCards ?? []}
            showHeader={false}
            columns={6}
            cardColumns={3}
            iconWrapperSize={48}
            iconSize={30}
            embedded={true}
          />
        </Panel>
      </Container>
    </Section>
  );
}

export default smartFeatures;
