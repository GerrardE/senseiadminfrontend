import * as firebase from "firebase/app";
import { toast } from "react-toastify";
import * as signoutActions from "./signout.actions";

toast.configure();

const signout = () => (dispatch) => {
  try{
    dispatch(signoutActions.signoutLoading(true));
    dispatch(signoutActions.signoutUser());
    dispatch(signoutActions.signoutSuccess());
    toast.success("Signout success");
    dispatch(signoutActions.signoutLoading(false));
  } catch(err) {
    toast.error("Signout failed");
    dispatch(signoutActions.signoutFail(err));
    dispatch(signoutActions.signoutLoading(false));
  }
};

const firebaseSignout = () => (dispatch) => {
  try{
    dispatch(signoutActions.signoutLoading(true));
    firebase.auth().signOut();
    dispatch(signoutActions.signoutUser());
    dispatch(signoutActions.signoutSuccess());
    toast.success("Signout success");
    dispatch(signoutActions.signoutLoading(false));
  } catch(error) {
    toast.error("Signout failed");
    dispatch(signoutActions.signoutFail(error));
    dispatch(signoutActions.signoutLoading(false));
  }
};

export {
  signout,
  firebaseSignout,
};
