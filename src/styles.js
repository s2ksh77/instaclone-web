import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body{
    background-color: ${(props) => props.theme.bgColor};
  }
`;

export const LightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightgray",
};

export const DarkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c",
};
