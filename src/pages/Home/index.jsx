
import { Container } from "./styles";
import { FileMagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '../../components/Input';
import { Footer } from "../../components/Footer";
import { Header } from '../../components/Header'
import { IngredientTag } from "../../components/IngredientTag"


export function Home() {

  return (
    <Container>
      <IngredientTag title={"Bread"} />
      <IngredientTag title={"Lettuce"} />
    </Container>
  );
}