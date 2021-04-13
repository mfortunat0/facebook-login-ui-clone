import styled from "styled-components";

interface IButon {
  isPrimary: boolean;
}

export const FormContainer = styled.form`
  display: flex;
  width: 43%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 4vh 1.5vw 4vh 1.5vw;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const Input = `
    font-size: 17px;
    padding: 15px;
    border-radius: 6px;
    outline: unset;
    border: 1px solid #dddfe2;
    color: #1d2129;
`;

export const InputEmail = styled.input.attrs({ type: "email" })`
  :focus {
    ::placeholder {
      color: rgba(29, 33, 41, 0.5);
    }
    border: 1px solid ${(props) => props.theme.colors.primary};
  }

  ${Input};
`;

export const InputPassword = styled.input.attrs({ type: "password" })`
  :focus {
    ::placeholder {
      color: rgba(29, 33, 41, 0.5);
    }
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
  ${Input}
`;

export const Button = styled.button<IButon>`
  font-size: ${(props) => (props.isPrimary ? "20px" : "17px")};
  color: white;
  background-color: ${(props) =>
    props.isPrimary
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  width: ${(props) => (props.isPrimary ? "100%" : "50%")};
  padding: 12px 0;
  font-family: Helvetica;
  font-weight: bold;
  border: unset;
  outline: unset;
  cursor: pointer;
  border-radius: 6px;
  align-self: center;
  transition: filter 0.5 ease-in-out;
  :hover {
    filter: brightness(0.96);
  }
`;

export const Link = styled.a`
  text-align: center;
  font-family: Helvetica;
  color: ${(props) => props.theme.colors.primary};
  font-size: 14px;
  text-decoration: unset;
  :hover {
    text-decoration: underline;
  }
`;

export const Line = styled.hr`
  height: 1px;
  background-color: #ccc;
  border: none;
  margin: 10px 0;
`;
