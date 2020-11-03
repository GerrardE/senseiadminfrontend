import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@domain/redux/_helpers/thunkService";
import * as actions from "@domain/redux/settings/settings.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import SettingsUpdate from "./SettingsUpdate";
import SettingCreate from "./SettingsCreate";
import { isEmpty } from "../validations/schema";
import constants from "./settings.constants";

const SettingsView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;
  const dispatch = useDispatch();
  const { settings: data, loading } = useSelector((state) => state.settings);
  const actionItems = {
    canview: false,
    canedit: true,
    candelete: true,
  };

  const columns = React.useMemo(
    () => tableData, [tableData],
  );

  React.useEffect(() => {
    dispatch(getItems(actions, parameters));
  }, [dispatch, parameters]);

  if (!isEmpty(match.params) && match.path === `/dashboard/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <SettingsUpdate id={id} props={rest} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === `/dashboard/${parameters}/create/${parameter}`
  ) {
    return <SettingCreate props={rest} />;
  }

  return (
    <React.Fragment>
      <a
        href={`/dashboard/${parameters}/create/${parameter}`}
        className="btn btn-outline-primary float-right"
        role="button"
        aria-pressed="true"
      >
        {`CREATE ${parameters.toUpperCase()}`}
      </a>
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader" />
      ) : (
        <AppTable
          data={data}
          columns={columns}
          actionItems={actionItems}
          actions={actions}
          constants={constants}
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
