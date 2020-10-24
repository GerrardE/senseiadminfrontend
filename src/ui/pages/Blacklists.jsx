import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { BlacklistsView } from "../components";

const Blacklists = (props) => {
  return (
    <Dashboard>
      <BlacklistsView {...props} />
    </Dashboard>
  );
};

export default Blacklists;
