import React from "react";
import logo from "./logo/logo.svg";
import { Header, NavMenu } from "./styles";

const Menu = () => {
  return (
    <>
    <Header>
      <div>
      <img
        src={logo}
        alt="Logo da Casa Verde, contendo uma folha a esquerda e o nome Casa Verde ao lado"
      />
      </div>
      <NavMenu>
        <li><a href="/">Como fazer</a></li>
        <li><a href="/">Ofertas</a></li>
        <li><a href="/">Depoimentos</a></li>
        <li><a href="/">Vídeos</a></li>
        <li><a href="/">Meu carrinho</a></li>
        </NavMenu>
    </Header>
    </>
  );
};

export default Menu;
