import React, { useState, useEffect } from "react";
// Store
import data from "../store/data/information";
// Components
// -- UI
import Layout from "../components/containers/layout/layout";
import InitPage from "../components/containers/init/init";
import About from "../components/containers/about/about";
import Skills from "../components/containers/skills/skills";
import Experience from "../components/containers/experience/experience";
// Styles
import "normalize.css";
import animationCSS from "../assets/styles/init_screen_animation.css";
// Material-UI
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
// Context
import { dataContext } from "../store/context/dataContext";
// isMobile Hook
import useDeviceDetect from "../hooks/useDeviceDetect";

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
          <Layout height={"100vh"}>
            <InitPage />
          </Layout>
          <Layout>
            <About />
          </Layout>
          <Layout>
            <Skills />
          </Layout>
          <Layout>
            <Experience />
          </Layout>
        </dataContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Index;
