import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getSettings } from "@domain/redux/settings/settings.thunks";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import SettingsUpdate from "./SettingsUpdate";
import SettingAdd from "./SettingsAdd";
import { isEmpty } from "../validations/schema";

const SettingsView = ({ match, ...rest }) => {
  const dispatch = useDispatch();
  const { settings: data, loading } = useSelector((state) => state.settings);
  const actionItems = {
    canview: false,
    canedit: true,
    candelete: true,
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Meta type",
        accessor: "metatype",
      },
      {
        Header: "Meta Key",
        accessor: "metakey",
      },
      {
        Header: "Meta Value",
        accessor: "metavalue",
      },
    ],
    [],
  );

  React.useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);

  if (!isEmpty(match.params) && match.path === "/dashboard/settings/:id") {
    const { params } = match;
    const { id } = params;

    return <SettingsUpdate id={id} props={rest} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === "/dashboard/settings/add/setting"
  ) {
    return <SettingAdd props={rest} />;
  }

  return (
    <React.Fragment>
      <a
        href="/dashboard/settings/add/setting"
        className="btn btn-outline-primary float-right"
        role="button"
        aria-pressed="true"
      >
        Add Setting
      </a>
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader" />
      ) : (
        <AppTable
          title="Settings"
          subtitle="List of all settings"
          data={data}
          columns={columns}
          actions={actionItems}
        />
      )}
    </React.Fragment>
  );
};

SettingsView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

SettingsView.defaultProps = {
  match: {},
};

export default SettingsView;
