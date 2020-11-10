import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { getItem } from "@domain/redux/_helpers/thunkService";
import * as actions from "@domain/redux/users/users.actions";
import Logo from "@ui/assets/static/images/logo.png";
import { AppLoader } from "../../molecules";
import constants from "./users.constants";

const UserDetails = ({ id, ...rest }) => {
  const { parameters } = constants;
  const callBackUrl = `/dashboard/${parameters}`;

  const { props } = rest;
  const dispatch = useDispatch();
  const { history } = props;
  if (!id) history.push(callBackUrl);

  const { user, loading } = useSelector((state) => state.users);
  const keys = Object.keys(user);

  React.useEffect(() => {
    dispatch(getItem(actions, `/users/${id}`));
  }, [dispatch, id]);

  return (
    <div className="containerx">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="bg-white bd bdrs-3 p-20 mB-20">
            <div className="justify-content-center mt-50 mb-50">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    {loading ? (
                      <AppLoader />
                    ) : (
                      <React.Fragment>
                        <div className="card-header card-custom-header bg-transparent header-elements-inline">
                          <div className="row">
                            <img src={Logo} alt="Sensei Logo" />
                            <h6 className="card-title card-custom-title">
                              Sensei
                            </h6>
                          </div>
                        </div>
                        <div className="card-body card-custom-body">
                          <div className="row">
                            <div className="col-sm-6" />
                            <div className="col-sm-6">
                              <div className="mb-4 ">
                                <div className="text-sm-right float-right">
                                  <h4 className="invoice-color mb-2 mt-md-2">
                                    {`${user.firstName} ${user.lastName}`}
                                  </h4>
                                  <ul className="list list-unstyled mb-0">
                                    <li>
                                      Joined:
                                      <span className="font-weight-semibold">
                                        {moment(user.createdat).format(
                                          "DD/MM/YYYY",
                                        )}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="mb-4 " />
                            </div>
                            <div className="col-sm-6" />
                          </div>
                        </div>

                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Key</th>
                                <th>Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {keys.map((key) => (
                                <tr key={uuidv4()}>
                                  <td>
                                    <h6 className="mb-0">{key}</h6>
                                  </td>
                                  {(key == "createdat" || key == "updatedat") ? (
                                    <td>{moment(user[key]).format("DD/MM/YYYY")}</td>
                                  ) : (
                                    <td>{user[key]}</td>
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="card-footer">
                          <span className="text-muted float-right">
                            <a
                              className="btn btn-outline-danger"
                              href={callBackUrl}
                              role="button"
                            >
                              Back
                            </a>
                          </span>
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  props: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

UserDetails.defaultProps = {
  history: {},
  props: {},
  id: 1,
};

export default UserDetails;
