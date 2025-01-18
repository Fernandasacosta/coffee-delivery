import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&family=Syne:wght@400..800&display=swap');

  
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
  font-family: 'Baloo 2', serif;
  display: flex;
  justify-content: center;
  height: 100vh; 

}

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
  }
`;
