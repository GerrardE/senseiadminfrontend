import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "@domain/redux/settings/settings.actions";
import { getItems } from "@domain/redux/_helpers/thunkService";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import BlacklistUpdate from "./BlacklistsUpdate";
import BlacklistAdd from "./BlacklistsCreate";
import { isEmpty } from "../validations/schema";
import constants from "./blacklists.constants";

const BlacklistsView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;
  const dispatch = useDispatch();
  const { blacklists: data, loading } = useSelector((state) => state.blacklists);
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

    return <BlacklistUpdate id={id} props={rest} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === `/dashboard/${parameters}/create/${parameter}`
  ) {
    return <BlacklistAdd props={rest} />;
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

BlacklistsView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

BlacklistsView.defaultProps = {
  match: {},
};

export default BlacklistsView;
