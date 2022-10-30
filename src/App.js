import React, { Component } from "react";
import LandingPage from "@pages/LandingPage";
import AboutPage from "@pages/AboutPage";
import StoryPage from "@pages/StoryPage";
import MorePage from "@pages/StoryPage";
// import PortfolioPage from '@pages/PortfolioPage';
import ParallaxBackground from "@components/ParallaxBackground";
import ScrollTop from "@components/ScrollTop";
import ThemeSwitcher from "@components/ThemeSwitcher";
import Browser from "@components/Browser";
import Footer from "@components/Footer";
import ReactGA from "react-ga";
ReactGA.initialize("UA-125705862-1");
ReactGA.pageview("/");

class App extends Component {
    initializeReactGA() {
        ReactGA.initialize("UA-125705862-1");
        ReactGA.pageview("/");
    }

    render() {
        return (
            <div className="dev-landing-page">
                <ThemeSwitcher>
                    <Browser except firefox>
                        <ParallaxBackground />
                    </Browser>
                    <LandingPage />
                    <AboutPage />
                    <StoryPage />
                    <MorePage />
                    {
                        // <PortfolioPage />
                    }
                    <ScrollTop />
                    <Footer />
                </ThemeSwitcher>
            </div>
        );
    }
}

export default App;
