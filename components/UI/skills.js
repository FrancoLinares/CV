import React from "react";
import PropTypes from "prop-types";
// Material UI
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
// Styles
import styles from "../../assets/styles/about_me.css";
import commonStyles from "../../assets/styles/common.css";
// Framer-motion
import { motion, useViewportScroll, useTransform } from "framer-motion";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#0178848c",
  },
}))(LinearProgress);

function skills({ data }) {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 1], [0, 0.05, 0.25, 0.9, 1]);
  return (
    <motion.div initial={{ opacity: 1 }} style={{ opacity: opacity }}>
      <Typography className={commonStyles.title} variant="h3" gutterBottom>
        My Skills
        <hr className={commonStyles.progress}></hr>
      </Typography>
      <Grid container>
        {data.skills.tech &&
          Object.entries(data.skills.tech).map(([key, value]) => {
            return (
              <Grid key={key} item xs={4} className={styles.paper}>
                <Typography variant="h4" gutterBottom>
                  {key}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Box minWidth={45}>
                    <Typography variant="h6" gutterBottom color="textSecondary">{`${Math.round(value)} % `}</Typography>
                  </Box>
                  <Box width="100%" mr={1}>
                    <BorderLinearProgress variant="determinate" value={value} />
                  </Box>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </motion.div>
  );
}

skills.propTypes = {
  data: PropTypes.shape({
    skills: PropTypes.object.isRequired,
  }),
};

export default skills;
