import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    body {
        font-family: Cormorant;
    }

    button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export { Globals };
