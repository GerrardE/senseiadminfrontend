import blacklistsConstants from "./blacklists.constants";

const initialState = {
  blacklists: [],
  blacklist: {},
  loading: false,
  errors: {},
};

const blacklistsReducer = (state = initialState, action) => {
  switch (action.type) {
  case blacklistsConstants.BLACKLISTS_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET */
  case blacklistsConstants.GET_BLACKLISTS:
    return {
      ...state,
    };

  case blacklistsConstants.GET_BLACKLISTS_SUCCESS:
    return {
      ...state,
      blacklists: action.payload,
    };

  case blacklistsConstants.GET_BLACKLISTS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ONE*/
  case blacklistsConstants.GET_BLACKLIST:
    return {
      ...state,
    };

  case blacklistsConstants.GET_BLACKLIST_SUCCESS:
    return {
      ...state,
      blacklist: action.payload,
    };

  case blacklistsConstants.GET_BLACKLIST_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* ADD */
  case blacklistsConstants.ADD_BLACKLIST:
    return {
      ...state,
    };

  case blacklistsConstants.ADD_BLACKLIST_SUCCESS:
    return {
      ...state,
      blacklist: action.payload,
    };

  case blacklistsConstants.ADD_BLACKLIST_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE */
  case blacklistsConstants.UPDATE_BLACKLIST:
    return {
      ...state,
    };

  case blacklistsConstants.UPDATE_BLACKLIST_SUCCESS:
    return {
      ...state,
      blacklist: action.payload,
    };

  case blacklistsConstants.UPDATE_BLACKLIST_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE */
  case blacklistsConstants.DELETE_BLACKLIST:
    return {
      ...state,
    };

  case blacklistsConstants.DELETE_BLACKLIST_SUCCESS:
    return {
      ...state,
      blacklist: action.payload,
    };

  case blacklistsConstants.DELETE_BLACKLIST_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default blacklistsReducer;
