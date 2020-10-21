import signinConstants from "./signin.constants";

const initialState = {
  user: {},
  errors: "",
  isAuthenticated: false,
  loading: false,
};

const signinReducer = (state = initialState, action) => {
  switch (action.type) {
  case signinConstants.SIGNIN_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  case signinConstants.SIGNIN_SUCCESS:
    return {
      ...state,
      user: action.payload,
      isAuthenticated: true,
    };

  case signinConstants.SIGNIN_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default signinReducer;
