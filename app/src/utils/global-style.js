import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.color.gallery};
    font-family: sans-serif;
  }
`

export default GlobalStyle
