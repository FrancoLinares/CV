import React, { useState, useEffect } from "react";
// Store
import data from "../store/data/pages";
// Components
// -- UI
import Page from "../components/UI/page";
import InitPage from "../components/UI/initPage";
import About from "../components/UI/about";
import Skills from "../components/UI/skills";
import Experience from "../components/UI/experience";
// Styles
import "normalize.css";
import animationCSS from "../assets/styles/init_screen_animation.css";
// Material-UI
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
// Context
import { dataContext } from "../store/context/dataContext";
// isMobile Hook
import useDeviceDetect from "../utils/useDeviceDetect";

const Index = () => {
  const { isMobile } = useDeviceDetect();
  let theme = createMuiTheme({
    props: {
      // withWidth component ⚛️
      MuiWithWidth: {
        // Initial width property
        initialWidth: "lg", // Breakpoint being globally set 🌎!
      },
    },
  });
  theme = responsiveFontSizes(theme);
  const age = new Date(new Date() - new Date(data.about.information.age)).getFullYear() - 1970;

  useEffect(() => {
    if (!data.about.information.website) {
      data.about.information.website = window.location.href;
    }
    data.about.information.age = age;
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className={animationCSS.bg}></div>
        <div className={[animationCSS.bg, animationCSS.bg2].join(" ")}></div>
        <div className={[animationCSS.bg, animationCSS.bg3].join(" ")}></div>
        <dataContext.Provider value={{ data, isMobile }}>
          <Page height={"100vh"}>
            <InitPage />
          </Page>
          <Page>
            <About />
          </Page>
          <Page>
            <Skills />
          </Page>
          <Page>
            <Experience />
          </Page>
        </dataContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Index;
