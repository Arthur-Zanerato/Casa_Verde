import Cards from "./Card";
import { Section, Title } from "./styles";

const Products = ({ catalog }) => {
  return (
    <>
      <Title>
        Conheça nossas <strong>ofertas</strong>
      </Title>
      <Section>
        {catalog.map((card) => {
          return <Cards {...card} key={card.name} />;
        })}
      </Section>
    </>
  );
};

export default Products;
