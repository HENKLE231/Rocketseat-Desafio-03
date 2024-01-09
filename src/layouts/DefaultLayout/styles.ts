import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    min-height: 100vh;
`

export const Banner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.875rem 0;
    background-color: ${(props) => props.theme['dark-blue-500']};

    img:first-child {
        width: 33%;
        /* max-width: 409px; */
        max-width: 400px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    img {
        width: 25%;
        max-width: 148px;
    }

    img:last-child {
        width: 33%;
        /* max-width: 371px; */
        max-width: 400px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`

export const MainContainer = styled.div`
    max-width: 864px;
    margin: auto;
    padding: 0 1rem;
`