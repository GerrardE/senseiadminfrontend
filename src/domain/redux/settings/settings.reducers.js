import settingsConstants from "./settings.constants";

const initialState = {
  settings: [],
  setting: {},
  loading: false,
  errors: {},
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
  case settingsConstants.SETTINGS_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET */
  case settingsConstants.GET_SETTINGS_SUCCESS:
    return {
      ...state,
      settings: action.payload,
    };

  case settingsConstants.GET_SETTINGS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ONE */
  case settingsConstants.GET_SETTING_SUCCESS:
    return {
      ...state,
      setting: action.payload,
    };

  case settingsConstants.GET_SETTING_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* ADD */
  case settingsConstants.ADD_SETTING_SUCCESS:
    return {
      ...state,
      setiing: action.payload,
    };

  case settingsConstants.ADD_SETTING_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE */
  case settingsConstants.UPDATE_SETTING_SUCCESS:
    return {
      ...state,
      setting: action.payload,
    };

  case settingsConstants.UPDATE_SETTING_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE */
  case settingsConstants.DELETE_SETTING_SUCCESS:
    return {
      ...state,
      setting: action.payload,
    };

  case settingsConstants.DELETE_SETTING_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default settingsReducer;
