import {
  Signin,
  Dashboard,
  Notfound,
  ServerError,
  Blacklists,
  Settings,
} from "../pages";

const routes = [
  {
    path: "/",
    component: Signin,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    protected: true,
  },
  
  /* BLACKLISTS */
  {
    path: "/dashboard/blacklists",
    component: Blacklists,
    protected: true,
  },
  {
    path: "/dashboard/blacklists/:id",
    component: Blacklists,
    protected: true,
  },
  {
    path: "/dashboard/blacklists/create/blacklist",
    component: Blacklists,
    protected: true,
  },
  
  /* SETTINGS */
  {
    path: "/dashboard/settings",
    component: Settings,
    protected: true,
  },
  {
    path: "/dashboard/settings/:id",
    component: Settings,
    protected: true,
  },
  {
    path: "/dashboard/settings/create/setting",
    component: Settings,
    protected: true,
  },
  /* DEFAULTS */
  {
    path: "/servererror",
    component: ServerError,
  },
  {
    path: "*",
    component: Notfound,
  },
];

export default routes;
