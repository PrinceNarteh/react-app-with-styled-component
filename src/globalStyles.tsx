import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primaryColor: "#101522",
    light: "#fff",
  },
};

export type ColorTheme = typeof theme;
export interface Theme {
  primary?: boolean;
  large?: boolean;
  bigFont?: boolean;
}

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Source Sans Pro", sans-serif
    }

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }: Theme) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ bigFont }: Theme) => (bigFont ? "12px 64px" : "10px 20px")};
  color: ${theme.colors.light};
  font-size: ${({ bigFont }: Theme) => (bigFont ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${theme.colors.light};
    background-color: ${({ primary }: Theme) =>
      primary ? "#0467FB" : "#4B59F7"};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
