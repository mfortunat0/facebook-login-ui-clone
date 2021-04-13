import {
  FormContainer,
  InputEmail,
  InputPassword,
  Button,
  Link,
  Line,
} from "../styles/form";

export default function Form() {
  return (
    <FormContainer>
      <InputEmail placeholder="Email ou telefone" />
      <InputPassword placeholder="Senha" />
      <Button isPrimary={true}>Entrar</Button>
      <Link href="https://www.facebook.com/recover/initiate/?ars=facebook_login&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE4MjM4MzY0LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D">
        Esqueceu a senha?
      </Link>
      <Line />
      <Button isPrimary={false}>Criar nova conta</Button>
    </FormContainer>
  );
}
