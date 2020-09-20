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

const Index = () => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  const ageDate = new Date(data.about.information.age);
  if (!isNaN(ageDate.getTime())) {
    data.about.information.age = new Date(new Date() - ageDate).getFullYear() - 1970;
  }

  useEffect(() => {
    if (!data.about.information.website) {
      data.about.information.website = window.location.href;
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className={animationCSS.bg}></div>
        <div className={[animationCSS.bg, animationCSS.bg2].join(" ")}></div>
        <div className={[animationCSS.bg, animationCSS.bg3].join(" ")}></div>
        <Page>
          <InitPage data={data} />
        </Page>
        <Page>
          <About data={data} />
        </Page>
        <Page>
          <Skills data={data} />
        </Page>
        <Page height={"auto"}>
          <Experience data={data} />
        </Page>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Index;
