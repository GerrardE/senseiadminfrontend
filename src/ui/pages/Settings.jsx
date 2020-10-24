import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { SettingsView } from "../components";

const Settings = (props) => {
  return (
    <Dashboard>
      <SettingsView {...props} />
    </Dashboard>
  );
};

export default Settings;
