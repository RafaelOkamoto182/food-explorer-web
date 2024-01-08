
import { CardContainer, Container } from "./styles";

import { FoodCard } from "../../components/FoodCard";

export function Home() {

  return (
    <Container>
      <CardContainer>

        <FoodCard
          foodData={{ name: "Fattoush", price: 25, isfavorite: false, description: "a Levantine salad made from toasted or fried pieces of khubz." }}
        />
      </CardContainer>
    </Container>
  );
}