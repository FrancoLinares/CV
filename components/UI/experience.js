import React from "react";
import PropTypes from "prop-types";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "../UI/timeline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import WorkIcon from "@material-ui/icons/Work";
// Styles
import commonStyles from "../../assets/styles/common.css";
// Framer-motion
import { motion, useViewportScroll, useTransform } from "framer-motion";

const useStyles = makeStyles({
  box: {
    width: "80%",
    margin: "auto",
    padding: "18vh 0 5vh 0",
  },
});

function experience({ data }) {
  const classes = useStyles();
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.9, 1], [0, 0.5, 0.95, 1]);

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
        <Timeline data={data.experience.timeline.work}></Timeline>
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
        <Timeline data={data.experience.timeline.education}></Timeline>
      </Box>
    </motion.div>
  );
}

experience.propTypes = {
  data: PropTypes.shape({
    experience: PropTypes.object.isRequired,
  }),
};

export default experience;
