import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
 * {
 padding: 0;
 margin: 0;
 box-sizing: border-box
 }

 :focus {
 outline: transparent;
 }

 body {
  background: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
 }

 body, input, textarea, button {
  font-family: "Inter" , sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
`