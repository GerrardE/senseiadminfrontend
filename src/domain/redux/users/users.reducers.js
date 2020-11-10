import usersConstants from "./users.constants";

const initialState = {
  users: [],
  user: {},
  loading: false,
  errors: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case usersConstants.USERS_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET */
  case usersConstants.GET_USERS_SUCCESS:
    return {
      ...state,
      users: action.payload,
    };

  case usersConstants.GET_USERS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ONE*/
  case usersConstants.GET_USER_SUCCESS:
    return {
      ...state,
      user: action.payload,
    };

  case usersConstants.GET_USER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE */
  case usersConstants.CREATE_USER_SUCCESS:
    return {
      ...state,
      user: action.payload,
    };

  case usersConstants.CREATE_USER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE */
  case usersConstants.UPDATE_USER_SUCCESS:
    return {
      ...state,
      user: action.payload,
    };

  case usersConstants.UPDATE_USER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE */
  case usersConstants.DELETE_USER_SUCCESS:
    return {
      ...state,
      user: action.payload,
    };

  case usersConstants.DELETE_USER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default usersReducer;
