import React, { useState } from "react";
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
// Components
import Dialog from "../containers/dialog";

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
      <Timeline align="alternate">
        {data &&
          data.map((m, i) => {
            return (
              <>
                <TimelineItem key={i}>
                  <TimelineOppositeContent key={"oppositeContent" + i}>
                    <Typography variant="body1" color="textSecondary">
                      {m.time}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator key={"separator" + i}>
                    <TimelineDot>
                      <LaptopMacIcon color={m.dialog ? "primary" : "action"} />
                    </TimelineDot>
                    <TimelineConnector key={"connector" + i} />
                  </TimelineSeparator>
                  <TimelineContent key={"content" + i} onClick={() => handleClick(m)}>
                    <Paper elevation={1} className={classes.paper + " " + `${m.dialog ? classes.clickeable : ""}`}>
                      <Typography variant="h6" component="h1">
                        {m.title}
                      </Typography>
                      {m.desc.split("\n").map((string, i) => {
                        return <Typography key={i.toString() + "key"}>{string}</Typography>;
                      })}
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              </>
            );
          })}
      </Timeline>
      {dialogData.dialog && <Dialog open={open} setOpen={setOpen} data={dialogData} />}
    </>
  );
}
