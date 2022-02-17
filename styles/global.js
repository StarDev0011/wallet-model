import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  ${normalize}
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  *,
  *::after,
  *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    @media(min-width: 112.5em){
      font-size: 75%;
    }
    @media(max-width: 75em){
      font-size: 56.25%;
    }
    @media(max-width: 56.25em){
      font-size: 50%;
    }
    @media(max-width: 37.5em){
      font-size: 43.75%;
    }
  }
  body{
    min-height: 100%;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    font-weight: normal;
    color: ${theme.colors.blackColor};
    background: ${theme.colors.whiteColor};
    box-sizing: border-box;
    overscroll-behavior: none;
    font-family: ${theme.fonts.bodyFont};
    
  }
  .slick-next:before, .slick-prev:before {
    font-size: 36px;
  }
  .slick-dots {
    bottom: 25px;
  }
  .slick-prev {
    left: 10px;
    z-index: 9;
  }
  .slick-next {
    right: 25px;
    z-index: 9;
  }
  video#video_bg {
    position: fixed;
    z-index: -1;
    width: 100vw;
  }
  @media screen and (max-width: 465px){
    video#video_bg {
      width: auto;
      height: 100vh;
    }    
  }
`;

export default GlobalStyles;