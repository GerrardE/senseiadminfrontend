import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "@domain/redux/users/users.actions";
import { getItems } from "@domain/redux/_helpers/thunkService";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import UsersUpdate from "./UsersUpdate";
import UsersAdd from "./UsersCreate";
import { isEmpty } from "../validations/schema";
import constants from "./users.constants";
import UserDetails from "./UserDetails";

const UsersView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;
  const dispatch = useDispatch();
  const { users: data, loading } = useSelector((state) => state.users);
  const actionItems = {
    canview: true,
    canedit: false,
    candelete: false,
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

    return <UsersUpdate id={id} props={rest} />;
  }

  if (!isEmpty(match.params) && match.path === `/dashboard/${parameters}/:id/view`) {
    const { params } = match;
    const { id } = params;

    return <UserDetails id={id} props={rest} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === `/dashboard/${parameters}/create/${parameter}`
  ) {
    return <UsersAdd props={rest} />;
  }

  return (
    <React.Fragment>
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

UsersView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

UsersView.defaultProps = {
  match: {},
};

export default UsersView;
