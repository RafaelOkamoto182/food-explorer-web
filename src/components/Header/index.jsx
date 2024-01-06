import { Plus, List, Receipt, ShoppingCart } from "@phosphor-icons/react";

import headerBranding from '../../assets/header-branding.svg'


import { Container, HeaderContent, Menu, Orders } from "./styles";

export function Header() {
  return (
    <Container >
      <HeaderContent>
        <Menu>
          <List />
        </Menu>

        <img src={headerBranding} alt="Food explorer logo" />

        <Orders>
          <Receipt />
        </Orders>
      </HeaderContent>
    </Container>
  );
}