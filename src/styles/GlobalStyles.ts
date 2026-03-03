import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSizes.mobile.md};

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.desktop.md};
    }
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.base};
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
  }

  a {
    color: ${({ theme }) => theme.colors.mauve};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.lavender};
    }
  }

  code, pre {
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.mauve};
    color: ${({ theme }) => theme.colors.base};
  }
`;

export default GlobalStyles;
