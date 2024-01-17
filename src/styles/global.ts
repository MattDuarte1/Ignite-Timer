import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
 }

 body {
  background: ${({ theme }) => theme['gray-900']};
  color: ${({ theme }) => theme['gray-300']};
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }


 @media (max-width: 680px) {
  :root {
    font-size: 42.5%;
  }
 }

`
