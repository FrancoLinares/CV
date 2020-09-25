import React, { useEffect, useRef } from "react";
// Prop-types
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Chip } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// Components
import Carousel from "./carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  website: {
    marginTop: "3%",
  },
}));

export default function ScrollDialog({ open, setOpen, data }) {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) descriptionElement.focus();
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose} scroll="body" aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
      {data && <DialogTitle id="scroll-dialog-title">{data.title}</DialogTitle>}
      <DialogContent divider="true">
        {data.dialog && (
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
            {data.dialog.text}
          </DialogContentText>
        )}
        {data && data.dialog && data.dialog.tech.length > 0 && (
          <>
            <p>Technology involved:</p>
            {data.dialog.tech.map((tech, i) => (
              <Chip key={i} label={tech} color="primary" variant="outlined" />
            ))}
          </>
        )}
        {data.urlImages && <Carousel images={data.urlImages} />}
        {data.website && (
          <Typography variant="subtitle2" gutterBottom className={classes.website}>
            <Link href={data.website}>{data.website}</Link>
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}

ScrollDialog.propTypes = {
  data: PropTypes.shape({
    dialog: PropTypes.shape({
      text: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
    urlImages: PropTypes.array,
    website: PropTypes.string,
  }),
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
