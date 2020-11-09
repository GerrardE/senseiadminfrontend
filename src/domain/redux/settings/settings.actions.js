import settingsConstants from "./settings.constants";

const loading = (data) => ({
  type: settingsConstants.SETTINGS_LOADING,
  payload: data,
});

/* GET */
const getItemsSuccess = (data) => ({
  type: settingsConstants.GET_SETTINGS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: settingsConstants.GET_SETTINGS_FAIL,
  payload: data,
});

/* GET ONE */
const getItemSuccess = (data) => ({
  type: settingsConstants.GET_SETTING_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: settingsConstants.GET_SETTING_FAIL,
  payload: data,
});

/* CREATE */
const createItemSuccess = (data) => ({
  type: settingsConstants.CREATE_SETTING_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: settingsConstants.CREATE_SETTING_FAIL,
  payload: data,
});

/* UPDATE */
const updateItemSuccess = (data) => ({
  type: settingsConstants.UPDATE_SETTING_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: settingsConstants.UPDATE_SETTING_FAIL,
  payload: data,
});

/* DELETE */
const deleteItemSuccess = (data) => ({
  type: settingsConstants.DELETE_SETTING_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: settingsConstants.DELETE_SETTING_FAIL,
  payload: data,
});

export {
  loading,
  getItemsSuccess,
  getItemsFail,
  getItemSuccess,
  getItemFail,
  createItemSuccess,
  createItemFail,
  updateItemSuccess,
  updateItemFail,
  deleteItemSuccess,
  deleteItemFail,
};
