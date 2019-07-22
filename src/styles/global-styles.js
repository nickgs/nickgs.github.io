import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    /* @import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans'); */
    font-family: 'Open Sans', sans-serif;
  }

  h3 {
    font-family: 'Merriweather', serif;
  }
`

export default GlobalStyle