import React, { useEffect, useContext, useState } from "react";
import { UsersConsumer, UsersContext } from "../provider/UserProvider";
import Skeleton from "@material-ui/lab/Skeleton";
import { Container, Grid, List } from "@material-ui/core";
import UserItem from "./UserItem";
import UserDetalModal from "./UserDetailModal";
import CreateUserModal from "./CreateUserModal";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();

  const { getAllUsers, getUser, clearUser } = useContext(UsersContext);

  const [open, setOpen] = useState({
    details: false,
    create: false,
  });

  const handleCloseDetails = () => {
    setOpen({
      ...open,
      details: false,
    });
    clearUser();
  };

  const detailHandler = async (user_id) => {
    await getUser(user_id);
    setOpen({
      ...open,
      details: true,
    });
  };

  const handleCreateModal = (state) =>
    setOpen({
      ...open,
      create: state,
    });

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Container maxWidth="md">
      <UsersConsumer>
        {({ users }) => {
          if (users) {
            return (
              <>
                <List>
                  {users.map((user) => (
                    <UserItem
                      key={user.id}
                      {...user}
                      detailHandler={() => detailHandler(user.id)}
                    />
                  ))}
                </List>
                <UserDetalModal
                  open={open.details}
                  handleClose={handleCloseDetails}
                />
                <CreateUserModal
                  open={open.create}
                  handleClose={() => handleCreateModal(false)}
                />
              </>
            );
          }

          return (
            <Grid
              spacing={3}
              container
              direction="row"
              justify="flex-start"
              alignItems="stretch"
            >
              {[...Array(6)].map((i, index) => (
                <Grid item xs={12} md={12} key={index}>
                  <Skeleton style={{ width: "100%", height: "30px" }} />
                </Grid>
              ))}
            </Grid>
          );
        }}
      </UsersConsumer>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={() => handleCreateModal(true)}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};
