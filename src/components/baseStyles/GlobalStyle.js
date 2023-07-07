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

//-----reset-----//
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

main{
  width: 100%;
}
/* header {
  background-color: #5c0080;
  margin-bottom: 4rem;
} */

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
  left: 15px;
  bottom: auto;
  color: white;
  background-color: rgba(65, 45, 83, 1);
  font-size: 10px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 5px;
  width: 90%;

}

.image-gallery-content .image-gallery-slide .image-gallery-image{
  padding-top: 40px;
  @media screen and (max-width: 768px) {
    height: 300px;

  }
}

.input-file-container {
  position: relative;
  width: 156px;
} 
.js .input-file {
  position: absolute;
  top: 0; left: 0;
  width: 156px;
  opacity: 0;
  cursor: pointer;
}
.js .input-file:hover + .input-file-trigger,
.js .input-file:focus + .input-file-trigger,
.js .input-file-trigger:hover,
.js .input-file-trigger:focus {
  background: grey;
  color: white;
}

.file-return {
  margin: 0;
}
.file-return:not(:empty) {
  margin: 1em 0;
}
.js .file-return {
  font-style: italic;
  font-size: .9em;
  font-weight: bold;
}
.js .file-return:not(:empty):before {
  content: " ";
  font-style: normal;
  font-weight: normal;
}

@media only screen and (min-device-width: 375px) {
  .header-wrapper {
    padding: 1rem;
  }
}


//-----swiper-----//
  .swiper-wrapper{
    width: 100px;
  }

  .swiper-slide, .swiper-slide-active{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    width: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .swiper-button-next::after {
  color: rgba(65, 45, 183, 1);
}

.swiper-button-prev::after {
  color: rgba(65, 45, 183, 1);
}

.swiper-pagination-bullet-active.swiper-pagination-bullet{
  background-color: rgba(65, 45, 183, 1)!important;
}
.swiper-pagination-bullet {
  background-color:rgba(219, 47, 47, 1)!important;
}

`;