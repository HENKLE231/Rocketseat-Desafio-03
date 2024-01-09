import styled from "styled-components";

export const SearchFormContainer = styled.form`
    input {
        width: 100%;
        padding: 1rem 0.875rem;
        background-color: ${(props) => props.theme['dark-blue-900']};
        border: 0;
        border-radius: 6px;
        margin-top: 0.875rem;
        margin-bottom: 3rem;

        &:placeholder {
            color: ${(props) => props.theme['dark-blue-400']};
        }
    }

    button {
        display: none;
    }
`