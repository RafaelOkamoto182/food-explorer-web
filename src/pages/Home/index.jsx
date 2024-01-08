
import { Container } from "./styles";
import { FileMagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '../../components/Input';
import { Footer } from "../../components/Footer";
import { Header } from '../../components/Header'
import { IngredientTag } from "../../components/IngredientTag"
import { IngredientInput } from "../../components/IngredientInput"
import { QtySelector } from "../../components/QtySelector";



export function Home() {

  return (
    <Container>
      <QtySelector />
    </Container>
  );
}