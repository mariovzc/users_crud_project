import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  ListItemAvatar,
  ListItemText,
  ListItem,
  Typography,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  gridItem: {
    padding: 14,
  },
  inline: {
    display: "inline",
  },
}));

export default ({ id, full_name, birth_date, image_url, gender, detailHandler }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.gridItem}
      key={id}
      spacing={3}
      container
      direction="row"
      justify="flex-start"
      alignItems="stretch"
    >
      <ListItem alignItems="flex-start" divider button onClick={detailHandler}>
        <ListItemAvatar>
          <Avatar alt={full_name} src={image_url} />
        </ListItemAvatar>
        <ListItemText
          primary={full_name}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {gender}
              </Typography>
              {birth_date}
            </>
          }
        />
      </ListItem>
    </Grid>
  );
};
