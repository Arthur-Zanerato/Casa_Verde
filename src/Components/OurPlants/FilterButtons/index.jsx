import NameFilter from "./NameBtn";
import PriceFilter from "./PriceBtn";
import { ContainerBtn, Title } from "./styles";

const Filter = () => {
  return (
    <>
      <Title>Filtrar por:</Title>
      <ContainerBtn>
        <NameFilter/>
        <PriceFilter />
      </ContainerBtn>
    </>
  );
};

export default Filter;
