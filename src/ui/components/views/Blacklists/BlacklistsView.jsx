import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getBlacklists } from "@domain/redux/blacklists/blacklists.thunks";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import BlacklistUpdate from "./BlacklistsUpdate";
import BlacklistAdd from "./BlacklistsAdd";
import { isEmpty } from "../validations/schema";

const BlacklistsView = ({ match, ...rest }) => {
  const dispatch = useDispatch();
  const { blacklists: data, loading } = useSelector((state) => state.blacklists);
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
        Header: "Entity Type",
        accessor: "entitytype",
      },
      {
        Header: "Entity",
        accessor: "entity",
      },
    ],
    [],
  );

  React.useEffect(() => {
    dispatch(getBlacklists());
  }, [dispatch]);

  if (!isEmpty(match.params) && match.path === "/dashboard/blacklists/:id") {
    const { params } = match;
    const { id } = params;

    return <BlacklistUpdate id={id} props={rest} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === "/dashboard/blacklists/add/blacklist"
  ) {
    return <BlacklistAdd props={rest} />;
  }

  return (
    <React.Fragment>
      <a
        href="/dashboard/blacklists/add/blacklist"
        className="btn btn-outline-primary float-right"
        role="button"
        aria-pressed="true"
      >
        Blacklist Item
      </a>
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader" />
      ) : (
        <AppTable
          title="Blacklists"
          subtitle="List of all blacklisted items"
          data={data}
          columns={columns}
          actions={actionItems}
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
