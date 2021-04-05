import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { UsersConsumer } from "../provider/UserProvider";
import {
  ListItemAvatar,
  ListItemText,
  ListItem,
  Avatar,
  CircularProgress
} from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";

export default ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle>User details:</DialogTitle>
      <UsersConsumer>
        {({ user }) => {
          if (user)
            return (
              <ListItem key={user.id}>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.full_name} />
              </ListItem>
            );
          return <CircularProgress />;
        }}
      </UsersConsumer>
    </Dialog>
  );
};
