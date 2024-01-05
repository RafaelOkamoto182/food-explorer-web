
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { X } from '@phosphor-icons/react'

export function Home() {

  return (
    <Container>
      <Button title={"incluir"} icon={X} />
    </Container>
  );
}