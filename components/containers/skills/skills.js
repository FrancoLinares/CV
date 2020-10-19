import React, { useContext } from "react";
import PropTypes from "prop-types";
// Material UI
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
// Styles
import commonStyles from "../../../assets/styles/common.scss";
// Framer-motion
import { motion, useViewportScroll, useTransform } from "framer-motion";
// Context
import { dataContext } from "../../../store/context/dataContext";

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

function Skills() {
  const { data, isMobile } = useContext(dataContext);
  const { scrollYProgress } = useViewportScroll();
  let opacity = 0;
  let skillGridClassColumns = 4;
  if (isMobile) {
    opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.28, 0.3], [0, 0.2, 0.79, 1]);
    skillGridClassColumns = 6;
  } else {
    opacity = useTransform(scrollYProgress, [0.28, 0.3, 0.34, 0.38], [0, 0.1, 0.8, 1]);
  }

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
              <Grid key={key} item xs={skillGridClassColumns} className={commonStyles.skillGrid}>
                <Typography variant="h5" gutterBottom>
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

Skills.propTypes = {
  data: PropTypes.shape({
    skills: PropTypes.object.isRequired,
  }),
};

export default Skills;
