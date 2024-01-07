
import { Container } from "./styles";
import { FileMagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '../../components/Input';
import { Footer } from "../../components/Footer";
import { Header } from '../../components/Header'
import { IngredientTag } from "../../components/IngredientTag"
import { IngredientInput } from "../../components/IngredientInput"



export function Home() {

  return (
    <Container>
      <IngredientInput
        isnew={false}
        value={"Bread"}
        onChange={() => { }}
        onClick={() => { }}
      />
      <IngredientInput
        isnew={true}
        value={""}
        placeholder={"Add"}
        onChange={() => { }}
        onClick={() => { }}
      />
    </Container>
  );
}