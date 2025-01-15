import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

   colors: {
    yellow-dark: '#C47F17',
    yellow: '#DBAC2C',
    yellow-light: '#F1E9C9',
    purple-dark: '#4B2995',
    purple: '#8047f8',
    purple-light: '#EBE5F9',
  },
`
