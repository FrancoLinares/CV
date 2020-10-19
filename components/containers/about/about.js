import React, { useContext } from "react";
import PropTypes from "prop-types";
// Framer-motion
import { motion, useViewportScroll, useTransform } from "framer-motion";
// Material UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Styles
import styles from "../../../assets/styles/about_me.scss";
import commonStyles from "../../../assets/styles/common.scss";
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
      <Grid container spacing={2} className={styles.aboutGrid}>
        <Grid className={styles.paper} item lg={6}>
          <motion.div whileHover={{ scale: 1.1 }} className={styles.boxShadow}>
            <Typography variant="h2" gutterBottom>
              About me:
              <hr className={commonStyles.progress}></hr>
            </Typography>
            <Typography variant="h5" gutterBottom>
              {data.about.desc.split("\n").map((string, i) => (
                <React.Fragment key={i}>
                  {string}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </motion.div>
        </Grid>
        <Grid className={styles.paper} item lg={6}>
          <motion.div whileHover={{ scale: 1.1 }} className={[styles.basicInformation, styles.boxShadow].join(" ")}>
            <Typography variant="h2" gutterBottom>
              Basic information:
              <hr className={commonStyles.progress}></hr>
            </Typography>
            {data.about.information &&
              Object.entries(data.about.information).map(([key, value]) => {
                return (
                  <Grid key={key} container spacing={2}>
                    <Grid item lg={6}>
                      <Typography variant="h5" gutterBottom>
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
          </motion.div>
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
