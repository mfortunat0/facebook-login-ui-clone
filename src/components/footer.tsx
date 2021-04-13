import { Text, FooterContainer, Link } from "../styles/footer";

export default function Footer() {
  return (
    <FooterContainer>
      <Text>
        <Link href="https://www.facebook.com/pages/create/?ref_type=registration_form">
          Criar uma Página
        </Link>{" "}
        para uma celebridade, banda ou empresa.
      </Text>
    </FooterContainer>
  );
}
