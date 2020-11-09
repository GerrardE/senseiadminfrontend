import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { UsersView } from "../components";

const Users = (props) => {
  return (
    <Dashboard>
      <UsersView {...props} />
    </Dashboard>
  );
};

export default Users;
