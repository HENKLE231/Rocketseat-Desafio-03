import { Banner, LayoutContainer, MainContainer } from "./styles";
import leftEffect from '../../assets/left-effect.svg'
import rightEffect from '../../assets/right-effect.svg'
import logo from '../../assets/logo.svg'
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Banner>
                <img src={leftEffect} alt="" />
                <img src={logo} alt="" />
                <img src={rightEffect} alt="" />
            </Banner>
            <MainContainer>
                <Outlet />
            </MainContainer>
        </LayoutContainer>
    )
}