import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { firebaseSignout } from "@domain/redux/signout/signout.thunks";

const Topbar = ({ toggleCollapse, history }) => {
  const [show, setShow] = React.useState(false);
  const toggleShow = () => setShow((prevState) => !prevState);
  const user = useSelector((state) => state.signin.user);
  const dispatch = useDispatch();

  const handleSignout = () => dispatch(firebaseSignout(history));

  return (
    <React.Fragment>
      <div className="header navbar">
        <div className="header-container">
          <ul className="nav-left">
            <li>
              <Link
                to="#"
                id="sidebar-toggle"
                className="sidebar-toggle"
                onClick={toggleCollapse}
              >
                <i className="ti-menu" />
              </Link>
            </li>
          </ul>
          <ul className="nav-right">
            <li className={classnames("dropdown", { show: show })}>
              <Link
                to="#"
                className="dropdown-toggle no-after peers fxw-nw ai-c lh-1"
                aria-expanded={show ? "true" : "false"}
                onClick={toggleShow}
              >
                <div className="peer mR-10">
                  <img
                    className="w-2r bdrs-50p"
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt=""
                  />
                </div>
                <div className="peer">
                  <span className="fsz-sm c-grey-900">{user.email}</span>
                </div>
              </Link>
              <ul
                className={classnames("dropdown-menu fsz-sm", { show: "show" })}
              >
                <li role="separator" className="divider" />
                <li>
                  <Link
                    to="#"
                    className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"
                    onClick={handleSignout}
                  >
                    <i className="ti-power-off mR-10" />
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

Topbar.propTypes = {
  toggleCollapse: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]),
};

Topbar.defaultProps = {
  history: {},
};

export default Topbar;
