import { createGlobalStyle } from "styled-components"

export const colors = {
    primary: "#F0EDCC",
}

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background: #10414C;
        color: #F0EDCC;
    }
    body, input, button {
        font-family: 'UhBeecharming';
    }
`;