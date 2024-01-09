import styled from "styled-components";

export const PostInfoContainer = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme['dark-blue-700']};
    border-radius: 10px;
    padding: 2rem;
    gap: 2rem;
    position: relative;

    h2 {
        margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
        margin-top: -2rem;
        display: block;
    }
    @media (min-width: 768px) {margin-top: -3rem;}
    @media (min-width: 880px) {margin-top: -4rem;}
    @media (min-width: 992px) {margin-top: -5rem;}
`

export const PostHeader = styled.header`
    display: flex;
    justify-content: space-between;
    font-weight: bold;

    a {
        text-decoration: none;
        color: ${(props) => props.theme['blue-500']};
        display: flex;
        gap: 0.5rem;
        font-size: 0.75rem;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        margin-bottom: 1rem;
        
        &:hover {
            border-bottom: 1px solid ${(props) => props.theme['blue-500']};
        }

        svg {
            font-size: 1rem;
        }
    }
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 2rem;

    div {
        display: flex;
        align-items: center -0.5rem;
        text-decoration: none;
        color: ${(props) => props.theme['gray-400']};
    }

    img {
        margin-right: 0.5rem;
    }
`