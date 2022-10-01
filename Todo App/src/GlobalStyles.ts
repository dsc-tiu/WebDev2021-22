import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  --clr-primary:#2F80ED;
  --ff-montserrat:'Montserrat', sans-serif;
  --ff-raleway:'Raleway', sans-serif;
}
*,*::before,*::after{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}
`;

export default GlobalStyles;
