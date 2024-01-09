import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GitHubContextProvider } from "./contexts/GitHubContext";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <BrowserRouter>
                <GitHubContextProvider>
                    <Router />
                </GitHubContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}
