import Cards from "./Card";
import Filter from "./FilterButtons";
import { Section, Title } from "./styles";

const Products = ({ catalog }) => {
  return (
    <>
      <Title>
        Conheça nossas <strong>ofertas</strong>
      </Title>
      <Filter />
      <Section>
        {catalog.map((card) => {
          return <Cards {...card} key={card.name} />;
        })}
      </Section>
    </>
  );
};

export default Products;
