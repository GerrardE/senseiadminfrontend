import React from "react";
import { InfoCard } from "../../molecules";

const DashboardView = () => {

  return (
    <React.Fragment>
      <div className="row gap-20 masonry pos-r">
        <div className="masonry-sizer col-md-6" />
        <div className="masonry-item  w-100">
          <div className="row gap-20">
            <InfoCard
              title="Users"
            />
            <InfoCard title="Sessions" />
            <InfoCard
              title="Blacklists"
            />
          </div>
        </div>
        <div className="masonry-item col-md-6">
          <div className="bgc-white p-20 bd">
            <h6 className="c-grey-900">Bar Chart</h6>
            <div className="mT-30">
              <canvas id="bar-chart" height="220" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardView;
