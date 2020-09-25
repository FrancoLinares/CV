import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
// Framer-motion
import { motion, useViewportScroll, useTransform } from "framer-motion";
// Material UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Styles
import styles from "../../../assets/styles/about_me.css";
// Context
import { dataContext } from "../../../store/context/dataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "margin-top": "15%",
  },
}));

function About() {
  const { data, isMobile } = useContext(dataContext);
  const classes = useStyles();
  const { scrollYProgress } = useViewportScroll();
  let opacity = 0;
  if (isMobile) {
    opacity = useTransform(scrollYProgress, [0.03, 0.05, 0.63, 0.9, 0.1], [0, 0.25, 0.5, 0.8, 1]);
  } else {
    opacity = useTransform(scrollYProgress, [0.09, 0.12, 0.15, 0.17, 0.18], [0.03, 0.25, 0.75, 0.95, 1]);
  }

  return (
    <motion.div className={[classes.root, styles.about_me].join(" ")} initial={{ opacity: 1 }} style={{ opacity: opacity }}>
      <Grid container spacing={2}>
        <Grid className={styles.paper} item lg={6}>
          <div>
            <Typography variant="h2" gutterBottom>
              About me:
            </Typography>
            <Typography variant="h4" gutterBottom>
              {data.about.desc.split("\n").map((string, i) => (
                <React.Fragment key={i}>
                  {string}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </div>
        </Grid>
        <Grid className={styles.paper} item lg={6}>
          <div className={styles.basicInformation}>
            <Typography variant="h2" gutterBottom>
              Basic information:
            </Typography>
            <Typography variant="h4" gutterBottom>
              {data.about.information &&
                Object.entries(data.about.information).map(([key, value]) => {
                  return (
                    <Grid key={key} container spacing={2}>
                      <Grid item lg={6}>
                        <Typography variant="h4" gutterBottom>
                          {key.toUpperCase()} :
                        </Typography>
                      </Grid>
                      <Grid item lg={6} className={styles.basicInformationValue}>
                        <Typography variant="h4" gutterBottom>
                          {value}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </motion.div>
  );
}

About.propTypes = {
  data: PropTypes.shape({
    about: PropTypes.object.isRequired,
  }),
};

export default About;
