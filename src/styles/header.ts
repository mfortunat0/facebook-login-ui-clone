import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 5vh;
`;

export const Logo = styled.img`
  height: 100px;
  position: relative;
  left: -30px;
`;

export const Subtitle = styled.h4`
  font-family: Helvetica;
  font-size: 26px;
  line-height: 28px;
  font-weight: normal;
  color: ${(props) => props.theme.colors.text};
`;
