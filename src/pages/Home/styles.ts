import styled from "styled-components";

export const SearchBarHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;

    span {
        font-size: 0.875rem;
        color: ${(props) => props.theme['dark-blue-400']};
    }
`

export const PostCardContainer = styled.div`
    display: grid;
    grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);
    gap: 2rem;

    @media (max-width: 576px) {
        grid-template-columns: 100%;
    }
`

export const PostCard = styled.a`
    background-color: ${(props) => props.theme['dark-blue-600']};
    color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['dark-blue-600']};
    text-decoration: none;
    border-radius: 10px;
    padding: 2rem;
    display: grid;
    gap: 1rem;
    /* height: 16.25rem; */

    p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    h3 {
        font-size: 1.25rem;
        color: white; 
        font-weight: bold;
    }

    header {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 1rem;
        height: fit-content;

        h3 {
            font-size: 1.25rem;
            color: white; 
            font-weight: bold;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        span {
            color: ${(props) => props.theme['gray-400']};
            font-size: 0.875rem;
            width: fit-content;
            height: fit-content;
        }

        @media (max-width: 768px) {
            display: block;
        }
    }

    &:hover {
        border: 1px solid ${(props) => props.theme['gray-400']};
    }
`