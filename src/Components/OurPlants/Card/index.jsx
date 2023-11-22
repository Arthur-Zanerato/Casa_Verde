import arrow from "./images/arrow.svg";
import { Card, Image, Info } from "./style";

const Cards = ({ name, price, img }) => {
  return (
    <Card>
      <Image>
        <img src={img} alt="" />
      </Image>
      <Info>
        <h1>{name}</h1>
        <strong>R$ {price}</strong>
        <a href="/">
          Comprar
          <img src={arrow} alt="Arrow image" />
        </a>
      </Info>
    </Card>
  );
};

export default Cards;
