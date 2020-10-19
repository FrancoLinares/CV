import React, { useState, useContext } from "react";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
// Context
import { dataContext } from "../../../../store/context/dataContext";
// Components
import Dialog from "./dialog";
// Styles
import timelineStyles from "../../../../assets/styles/timeline.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    textAlign: "center",
    backgroundColor: "#ffffff6e",
  },
  clickeable: {
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: "#ffffffb0",
    },
  },
}));

export default function CustomizedTimeline({ data }) {
  const classes = useStyles();
  // Context
  const { isMobile } = useContext(dataContext);
  // Dialog
  const emptyDialog = {
    title: "",
    dialog: { text: "", tech: [] },
  };
  const [open, setOpen] = useState(false);
  const [dialogData, setDialogData] = useState(emptyDialog);

  const handleClick = (element = false) => {
    if (!element.dialog) return;

    Object.entries(element).map(([key, value]) => {
      setDialogData((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    });
    setOpen(true);
  };

  return (
    <>
      <Timeline align={isMobile ? "left" : "alternate"}>
        {data &&
          data.map((m, i) => {
            return (
              <React.Fragment key={i}>
                <TimelineItem>
                  <TimelineOppositeContent className={timelineStyles.oppositeContextTimeline}>
                    <Typography variant="body1" color="textSecondary">
                      {m.time}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <LaptopMacIcon color={m.dialog ? "primary" : "action"} />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <Tooltip title={m.dialog ? "Click me!" : ""} aria-label="click">
                    <TimelineContent onClick={() => handleClick(m)}>
                      <Paper elevation={1} className={classes.paper + " " + `${m.dialog ? classes.clickeable : ""}`}>
                        <Typography variant="h6" component="h1">
                          {m.title}
                        </Typography>
                        {m.desc.split("\n").map((string, i) => {
                          return <Typography key={i + 50}>{string}</Typography>;
                        })}
                      </Paper>
                    </TimelineContent>
                  </Tooltip>
                </TimelineItem>
              </React.Fragment>
            );
          })}
      </Timeline>
      {dialogData.dialog && <Dialog open={open} setOpen={setOpen} data={dialogData} />}
    </>
  );
}
