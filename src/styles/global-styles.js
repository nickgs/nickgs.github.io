import styled, {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`

  body {
    @import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');
    font-family: 'Open Sans', sans-serif;
  }

  h3 {
    font-family: 'Merriweather', serif;
  }
`

export { GlobalStyle };