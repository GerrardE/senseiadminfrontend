import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "@domain/redux/_helpers/thunkService";
import * as actions from "@domain/redux/dashboard/dashboard.actions";
import { InfoCard } from "../../molecules";
import constants from "./dashboard.constants";
import AppLoader from "../../molecules/AppLoader";

const DashboardView = () => {
  const dispatch = useDispatch();
  const { parameter } = constants;
  const { dashboard, loading } = useSelector((state) => state.dashboard);
  const {
    sessions,
    unigueloginslastsevendayslabels,
    uniquelogins,
    sessionslastsevendays,
    sessionslastsevendayslabels,
    blacklists,
    settings,
    unigueloginslastsevendays,
  } = dashboard;

  React.useEffect(() => {
    dispatch(getItem(actions, `${parameter}/GBcrflY6aCOZz3IbE1iW`));
  }, [dispatch, parameter]);

  const data1 = {
    labels: sessionslastsevendayslabels,
    datasets: [
      {
        label: "# of Sessions",
        data: sessionslastsevendays,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(116, 163, 196, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(116, 163, 196, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data = {
    labels: unigueloginslastsevendayslabels,
    datasets: [
      {
        label: "No. of Logins",
        data: unigueloginslastsevendays,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <React.Fragment>
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader" />
      ) : (
        <div className="row gap-20 masonry pos-r">
          <div className="masonry-sizer col-md-6" />
          <div className="masonry-item  w-100">
            <div className="row gap-20">
              <InfoCard
                title="Unique Logins Today"
                value={uniquelogins}
                infoCardIcon="c-green-500 ti-user"
              />
              <InfoCard
                title="Sessions"
                value={sessions}
                infoCardIcon="c-blue-500 ti-mobile"
              />
              <InfoCard
                title="Blacklists"
                value={blacklists}
                infoCardIcon="c-red-500 ti-trash"
              />
              <InfoCard
                title="Settings"
                value={settings}
                infoCardIcon="ti-settings"
              />
            </div>
          </div>
          <div className="masonry-item col-lg-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">Unique Logins (Last 7 days)</h6>
              <div className="mT-30">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="masonry-item col-lg-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">Completed Sessions (Last 7 days)</h6>
              <div className="mT-30">
                <Doughnut data={data1} />
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default DashboardView;
