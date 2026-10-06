import styles from "./CalculatorSection.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

function CalculatorSection() {
  return (
    <Section>
      <Container>
        <Panel>
          <SectionHeader
            as="div"
            eyebrow="emission calculator"
            title="Measure Your Trip's Carbon Footprint"
            subtitle="Measure Your Trip's Carbon Footprint"
          />
        </Panel>
      </Container>
    </Section>
  );
}

export default CalculatorSection;
