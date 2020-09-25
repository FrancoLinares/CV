import React, { useContext } from "react";
import PropTypes from "prop-types";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "./timeline/timeline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import WorkIcon from "@material-ui/icons/Work";
// Styles
import commonStyles from "../../../assets/styles/common.css";
// Framer-motion
import { motion, useViewportScroll, useTransform } from "framer-motion";
// Context
import { dataContext } from "../../../store/context/dataContext";

const useStyles = makeStyles({
  box: {
    width: "80%",
    margin: "auto",
    padding: "18vh 0 5vh 0",
  },
});

function Experience() {
  const { data, isMobile } = useContext(dataContext);
  const classes = useStyles();
  const { scrollYProgress } = useViewportScroll();
  let opacity = 0;
  if (isMobile) {
    opacity = useTransform(scrollYProgress, [0.42, 0.44, 0.46, 0.47], [0, 0.3, 0.85, 1]);
  } else {
    opacity = useTransform(scrollYProgress, [0.55, 0.59, 0.61, 0.63], [0.05, 0.6, 0.9, 1]);
  }

  return (
    <motion.div initial={{ opacity: 1 }} style={{ opacity: opacity }}>
      <Box alignItems="center" className={classes.box}>
        <Typography className={commonStyles.title} variant="h3" gutterBottom>
          Resume
          <hr className={commonStyles.progress}></hr>
        </Typography>
        <Box display="flex" alignItems="center" style={{ paddingTop: "5vh" }} className={classes.box}>
          <Box minWidth={45}>
            <WorkIcon />
          </Box>
          <Box width="25%" mr={1}>
            <Typography variant="h4" gutterBottom>
              Working Experience
            </Typography>
          </Box>
        </Box>
        <Timeline data={data.experience.timeline.work} />
        <Box display="flex" alignItems="center" className={classes.box}>
          <Box minWidth={45}>
            <WorkIcon />
          </Box>
          <Box width="40%" mr={1}>
            <Typography variant="h4" gutterBottom>
              Educational Qualifications
            </Typography>
          </Box>
        </Box>
        <Timeline data={data.experience.timeline.education} />
      </Box>
    </motion.div>
  );
}

Experience.propTypes = {
  data: PropTypes.shape({
    experience: PropTypes.object.isRequired,
  }),
};

export default Experience;
