import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  :root {
    --background: #F5F5F5;
    --font-color: black;
  }

  body {
    background-color: var(--background);
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    color: var(--font-color);
    padding: 0.5rem 1rem;
  }
`;
