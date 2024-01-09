import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.6;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
    }

    body {
        background-color: ${(props) => props.theme['dark-blue-800']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme['gray-300']};
        font-family: ${(props) => props.theme['font']};
    }
`