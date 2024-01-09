import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme['dark-blue-700']};
    border-radius: 10px;
    padding: 2rem 2.5rem;
    align-items: start;
    display: flex;
    gap: 2rem;
    position: relative;

    @media (max-width: 768px) {
        margin-top: -2rem;
        display: block;
    }
    @media (min-width: 768px) {margin-top: -3rem;}
    @media (min-width: 880px) {margin-top: -4rem;}
    @media (min-width: 992px) {margin-top: -5rem;}
`

export const ProfileImgContainer = styled.div`
    width: 148px;
    height: 148px;
    border-radius: 8px;
    margin: auto;

    img {
        width: 148px;
        height: 148px;
    }

    @media (max-width: 768px) {
        margin: 0 auto 2rem;
    }
`

export const ProfileInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;

    h2 {
        color: ${(props) => props.theme['gray-100']};
        width: fit-content;
    }

    a {
        text-decoration: none;

        div {
            color: ${(props) => props.theme['blue-500']};
            display: flex;
            gap: 0.5rem;
            font-size: 0.75rem;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            
            &:hover {
                border-bottom: 1px solid ${(props) => props.theme['blue-500']};
            }
        }

        svg {
            font-size: 1rem;
        }
    }
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 1.5rem;

    img {
        width: 1.125rem;
        height: 1.125rem;
    }

    div {
        display: flex;
        align-items: center;
        line-height: 0;
        gap: 0.5rem;
        color: ${(props) => props.theme['gray-300']};
    }

    @media (max-width: 576px) {
        display: block;

        div {
            margin-bottom: 1rem;
        }

        div:last-child {
            margin-bottom: 0;
        }
    }
`