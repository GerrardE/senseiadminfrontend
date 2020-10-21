import React from "react";
import PropTypes from "prop-types";
import { Table } from "../molecules";

const AppTable = ({ title, subtitle, data, columns, actions, props }) => {
  
  return (
    <div className="container-fluid">
      <h4 className="c-grey-900 mT-10 mB-30">{title}</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="bgc-white bd bdrs-3 p-20 mB-20">
            <h4 className="c-grey-900 mB-20">{subtitle}</h4>
            <Table columns={columns} data={data} actions={actions} props={props} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

AppTable.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
  columns: PropTypes.oneOfType([PropTypes.array]).isRequired,
  props: PropTypes.oneOfType([PropTypes.object]),
};

AppTable.defaultProps = {
  title: "",
  subtitle: "",
  actions: {},
  props: {},
};

export default AppTable;
