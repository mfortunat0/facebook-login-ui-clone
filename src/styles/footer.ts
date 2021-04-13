import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-family: Helvetica;
  font-size: 15px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 5vh;
`;

export const Link = styled.a`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  text-decoration: unset;
  :hover {
    text-decoration: underline;
  }
`;
