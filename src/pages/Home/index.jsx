
import { Container } from "./styles";
import { FileMagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '../../components/Input';


export function Home() {

  return (
    <Container>
      <Input placeholder={"Search for dishes or ingredients"} icon={FileMagnifyingGlass} />
    </Container>
  );
}