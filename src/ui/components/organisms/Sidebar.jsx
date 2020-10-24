import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "@ui/assets/static/images/logo.png";

const Sidebar = ({ toggleCollapse }) => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-logo">
            <div className="peers ai-c fxw-nw">
              <div className="peer peer-greed">
                <a className="sidebar-link td-n" href="/dashboard">
                  <div className="peers ai-c fxw-nw">
                    <div className="peer">
                      <div className="logo">
                        <img src={Logo} alt="" />
                      </div>
                    </div>
                    <div className="peer peer-greed">
                      <h5 className="lh-1 mB-0 logo-text">Sensei Admin</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="peer">
                <div className="mobile-toggle sidebar-toggle">
                  <Link
                    to="#"
                    role="button"
                    className="td-n"
                    onClick={toggleCollapse}
                  >
                    <i className="ti-arrow-circle-left" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ul className="sidebar-menu scrollable pos-r">
            <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/dashboard">
                <span className="icon-holder">
                  <i className="c-blue-500 ti-home" />
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/dashboard/blacklists">
                <span className="icon-holder">
                  <i className="c-blue-500 ti-close" />
                </span>
                <span className="title">Blacklists</span>
              </a>
            </li>
            <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/dashboard/settings">
                <span className="icon-holder">
                  <i className="c-blue-500 ti-settings" />
                </span>
                <span className="title">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  toggleCollapse: PropTypes.func.isRequired,
};

export default Sidebar;
