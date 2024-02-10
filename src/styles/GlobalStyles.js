import { createGlobalStyle } from "styled-components";
import '@fontsource/akaya-telivigala';
import '@fontsource-variable/sora';



// global project react component...
// css styles
const GlobalStyles = createGlobalStyle`
*,*::before,*::after {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Sora Variable', sans-serif;
    // hide overflow in the x direction
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
}
a {
    // remove the blue color and inherit parents color
    color: inherit;
    // remove underline
    text-decoration: none;
}
`
export default GlobalStyles;
