import { toast } from "react-toastify";
import { getOneData } from "@infrastructure/firebase/firestore";
import * as signinActions from "./signin.actions";

toast.configure();

const signin = (data, history) => async (dispatch) => {
  try {
    dispatch(signinActions.signinLoading(true));
    const res = await getOneData("users", data);
    if(res == undefined){
      dispatch(signinActions.signinFail("signin failed"));
      toast.error("Signin failed");
    } else {
      dispatch(signinActions.signinSuccess(res));
      toast.success("Signin success");
      history.push("/dashboard");
    }
    dispatch(signinActions.signinLoading(false));
  } catch (error) {
    dispatch(signinActions.signinFail(error.message));
    dispatch(signinActions.signinLoading(false));
  }
};

export default signin;
