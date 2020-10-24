import { apiService } from "@infrastructure";
import * as actions from "./settings.actions";

const getSettings = () => async (dispatch) => {
  try {
    dispatch(actions.loading(true));
    const res = await apiService.getResource("settings");
    dispatch(actions.loading(false));
    dispatch(actions.getSettingsSuccess(res.data.data));
  } catch (err) {
    dispatch(actions.loading(false));
    dispatch(actions.getSettingsFail(err));
  }
};

const getSetting = (data) => async (dispatch) => {
  try {
    dispatch(actions.loading(true));
    const res = await apiService.getResource(`settings/${data}`);
    dispatch(actions.loading(false));
    dispatch(actions.getSettingSuccess(res.data.data));
  } catch (err) {
    dispatch(actions.loading(false));
    dispatch(actions.getSettingFail(err));
  }
};

const addSetting = (data, history) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const res = await apiService.postResource("settings", data);
    dispatch(actions.loading(false));
    dispatch(actions.addSettingSuccess(res.data.data));
    history.push("/dashboard/settings");
  } catch (err) {
    dispatch(actions.loading(false));
    dispatch(actions.addSettingFail(err));
  }
};

const updateSetting = (data, history) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const res = await apiService.putResource(`settings/${data.id}`, data);
    dispatch(actions.loading(false));
    dispatch(actions.updateSettingSuccess(res.data.data));
    history.push("/dashboard/settings");
  } catch (err) {
    dispatch(actions.loading(false));
    dispatch(actions.updateSettingFail(err));
  }
};

const deleteSetting = (data) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const res = await apiService.deleteResource(`settings/${data}`);
    dispatch(actions.loading(false));
    dispatch(actions.deleteSettingSuccess(res.data.data));
  } catch (err) {
    dispatch(actions.loading(false));
    dispatch(actions.deleteSettingFail(err));
  }
};

export { getSettings, getSetting, updateSetting, deleteSetting, addSetting };
