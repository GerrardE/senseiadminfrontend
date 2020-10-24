import * as firebase from "firebase";
import { toast } from "react-toastify";
import { getOneData } from "@infrastructure/firebase/firestore";
import * as signinActions from "./signin.actions";

toast.configure();

const signin = (data, history) => async (dispatch) => {
  try {
    dispatch(signinActions.signinLoading(true));
    const res = await getOneData("users", data);
    if (res == undefined) {
      dispatch(signinActions.signinFail("Signin failed"));
      toast.error("Signin failed");
    } else {
      dispatch(signinActions.signinSuccess(res));
      toast.success("Signin success");
      history.push("/dashboard");
    }
    dispatch(signinActions.signinLoading(false));
  } catch (error) {
    toast.error("Signin failed");
    dispatch(signinActions.signinFail(error.message));
    dispatch(signinActions.signinLoading(false));
  }
};

const firebaseSignin = (data, history) => async (dispatch) => {
  dispatch(signinActions.signinLoading(true));
  firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .catch(function (error) {
      toast.error(error.message);
      dispatch(signinActions.signinFail(error.message));
      dispatch(signinActions.signinLoading(false));
    });

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const authenticatedUser = {
        email: user.email,
        displayName: user.displayName,
      };
      dispatch(signinActions.signinSuccess(authenticatedUser));
      toast.success("Signin success");
      history.push("/dashboard");
    } else {
      // User is signed out.
      // ...
    }
  });
  dispatch(signinActions.signinLoading(false));
};

export { signin, firebaseSignin };
