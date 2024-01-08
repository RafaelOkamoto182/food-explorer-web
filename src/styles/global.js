import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from './deviceBreakPoints'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;

    @media(max-width: ${DEVICE_BREAKPOINTS.SM}){
      font-size: 58%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: .8rem;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #202024;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #09090A;
  }
`;