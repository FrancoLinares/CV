import React from "react";
import PropTypes from "prop-types";
// Framer-motion
import { motion, useViewportScroll, useTransform } from "framer-motion";
// Material UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Styles
import styles from "../../assets/styles/about_me.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "margin-top": "15%",
  },
}));

function about({ data }) {
  const classes = useStyles();
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.3, 1], [0, 0.5, 0.87, 0.95, 1]);

  return (
    <motion.div className={classes.root} initial={{ opacity: 1 }} style={{ opacity: opacity }}>
      <Grid container spacing={2}>
        <Grid className={styles.paper} item xs={6}>
          <div>
            <Typography variant="h2" gutterBottom>
              About me:
            </Typography>
            <Typography variant="h4" gutterBottom>
              {data.about.desc}
            </Typography>
          </div>
        </Grid>
        <Grid className={styles.paper} item xs={6}>
          <div>
            <Typography variant="h2" gutterBottom>
              Basic information:
            </Typography>
            <Typography variant="h4" gutterBottom>
              {data.about.information &&
                Object.entries(data.about.information).map(([key, value]) => {
                  return (
                    <Grid key={key} container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="h5" gutterBottom>
                          {key.toUpperCase()} :
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h5" gutterBottom>
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

about.propTypes = {
  data: PropTypes.shape({
    about: PropTypes.object.isRequired,
  }),
};

export default about;
