import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import signin from "./signin/signin.reducers";
import blacklists from "./blacklists/blacklists.reducers";
import settings from "./settings/settings.reducers";
import signoutConstants from "./signout/signout.constants";

const appReducer = combineReducers({
  signin,
  blacklists,
  settings,
});

const rootReducer = (state, action) => {
  if(action.type === signoutConstants.SIGNOUT_USER){
    storage.removeItem("persist:signin");
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
