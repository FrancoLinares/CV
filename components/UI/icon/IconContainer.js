import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  rotatePlus5: {
    transform: "rotateZ(5deg)",
  },
  rotateMinus5: {
    transform: "rotateZ(-5deg)",
  },
  rotatePlus10: {
    transform: "rotateZ(10deg)",
  },
  rotateMinus10: {
    transform: "rotateZ(-10deg)",
  },
}));

function IconContainer({ title, rotation, size, width, children, className }) {
  const styles = {
    transform: `rotateZ(${rotation}deg)`,
    // width: width + "px",
  };
  return (
    <Tooltip title={title}>
      <IconButton aria-label={title} style={styles} className={className}>
        {children}
      </IconButton>
    </Tooltip>
  );
}

export default IconContainer;
