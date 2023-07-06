import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Roboto', 'Poppins',
    'Manrope', 'Oswald', 'Montserrat', 'Bungee', 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  background-color: #FFFFFF;
  }

  code {
  font-family: source-code-pro, 'Menlo', 'Monaco', 'Consolas', 'Courier New',
    monospace;
  }

//-----reset-----
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}
`;
