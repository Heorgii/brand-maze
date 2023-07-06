import "modern-normalize";
import { createGlobalStyle } from "styled-components";

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

header {
  background-color: #5c0080;
  margin-bottom: 4rem;
}

.header-wrapper {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  padding: 1rem 0;
  color: #ffffff;
}

.header-wrapper h1 {
  font-size: 2rem;
}
.image-gallery{
  width: 100%;
}
.image-gallery-wrapper {
  margin-top: 5rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid rgb(146, 129, 242);
  box-shadow: #2b15453d 1px 10px 10px 5px;
}
.image-gallery-thumbnail-image{
  width: 94px;
  height: 80px;
}

.image-gallery-image{
  width: 1205px;
  height: 926px;
}

.image-gallery-thumbnails-container{
  margin-top: 20px;
}

.image-gallery-slide .image-gallery-description{
  top: 0;
  bottom: auto;
  color: white;
  background-color: black;
}

.image-gallery-content .image-gallery-slide .image-gallery-image{
  padding-top: 40px;
}

@media only screen and (min-device-width: 375px) {
  .header-wrapper {
    padding: 1rem;
  }
}
`;
