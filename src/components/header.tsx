import { HeaderContainer, Subtitle, Logo } from "../styles/header";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src="/logo.svg" />
      <Subtitle>
        O Facebook ajuda você a se conectar e compartilhar com as pessoas que
        fazem parte da sua vida.
      </Subtitle>
    </HeaderContainer>
  );
}
