import React from "react";
import { UsersProvider } from "./provider/UserProvider";
import UsersList from "./components/UsersList";
import AppBar from "./components/Appbar";

export default () => (
  <UsersProvider>
    <AppBar />
    <UsersList />
  </UsersProvider>
);
