
import { CardContainer, Container } from "./styles";

import { FoodCard } from "../../components/FoodCard";

export function Home() {

  return (
    <Container>
      <CardContainer>

        <FoodCard
          foodData={{ name: "Fattoush", price: 25, isfavorite: false, description: "Fatuche, ou Fattoush, (em árabe فتوش, «pão úmido», pronunciado /fatˈtuːʃ/) é uma salada típica da culinária libanesa dos países da região do Levante, entre eles a Síria e o Líbano. A salada é elaborada com diferentes verduras e legumes, como tomate e rabanete, servidos junto com pão libanes (ou pita) torrado, cortado em cubos ou tiras[1]. Em comparação com o tabule, as verduras" }}
        />
      </CardContainer>
    </Container>
  );
}