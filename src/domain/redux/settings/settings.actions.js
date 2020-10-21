import settingsConstants from "./settings.constants";

const loading = (data) => ({
  type: settingsConstants.SETTINGS_LOADING,
  payload: data,
});

/* GET */
const getSettings = (data) => ({
  type: settingsConstants.GET_SETTINGS,
  payload: data,
});

const getSettingsSuccess = (data) => ({
  type: settingsConstants.GET_SETTINGS_SUCCESS,
  payload: data,
});

const getSettingsFail = (data) => ({
  type: settingsConstants.GET_SETTINGS_FAIL,
  payload: data,
});

/* GET ONE */
const getSetting = (data) => ({
  type: settingsConstants.GET_SETTING,
  payload: data,
});

const getSettingSuccess = (data) => ({
  type: settingsConstants.GET_SETTING_SUCCESS,
  payload: data,
});

const getSettingFail = (data) => ({
  type: settingsConstants.GET_SETTING_FAIL,
  payload: data,
});

/* ADD */
const addSetting = (data) => ({
  type: settingsConstants.ADD_SETTING,
  payload: data,
});

const addSettingSuccess = (data) => ({
  type: settingsConstants.ADD_SETTING_SUCCESS,
  payload: data,
});

const addSettingFail = (data) => ({
  type: settingsConstants.ADD_SETTING_FAIL,
  payload: data,
});

/* UPDATE */
const updateSetting = (data) => ({
  type: settingsConstants.UPDATE_SETTING,
  payload: data,
});

const updateSettingSuccess = (data) => ({
  type: settingsConstants.UPDATE_SETTING_SUCCESS,
  payload: data,
});

const updateSettingFail = (data) => ({
  type: settingsConstants.UPDATE_SETTING_FAIL,
  payload: data,
});

/* DELETE */
const deleteSetting = (data) => ({
  type: settingsConstants.DELETE_SETTING,
  payload: data,
});

const deleteSettingSuccess = (data) => ({
  type: settingsConstants.DELETE_SETTING_SUCCESS,
  payload: data,
});

const deleteSettingFail = (data) => ({
  type: settingsConstants.DELETE_SETTING_FAIL,
  payload: data,
});

export {
  loading,
  getSettings,
  getSettingsSuccess,
  getSettingsFail,
  getSetting,
  getSettingSuccess,
  getSettingFail,
  addSetting,
  addSettingSuccess,
  addSettingFail,
  updateSetting,
  updateSettingSuccess,
  updateSettingFail,
  deleteSetting,
  deleteSettingSuccess,
  deleteSettingFail,
};
