import { apiService } from "@infrastructure";
import * as actions from "./blacklists.actions";

const getBlacklists = () => async (dispatch) => {
  try {
    dispatch(actions.loading(true));
    const blacklists = await apiService.getResource("blacklists");
    dispatch(actions.loading(false));
    dispatch(actions.getBlacklistsSuccess(blacklists.data.data));
  } catch (err) {
    dispatch(actions.loading(false));
    dispatch(actions.getBlacklistsFail(err));
  }
};

const getBlacklist = (data) => async (dispatch) => {
  try {
    dispatch(actions.loading(true));
    const blacklists = await apiService.getResource(`blacklists/${data}`);
    dispatch(actions.loading(false));
    dispatch(actions.getBlacklistSuccess(blacklists.data.data));
  } catch (err) {
    dispatch(actions.loading(false));
    dispatch(actions.getBlacklistFail(err));
  }
};

const addBlacklist = (data, history) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const res = await apiService.postResource("blacklists", data);
    dispatch(actions.loading(false));
    dispatch(actions.addBlacklistSuccess(res.data.data));
    history.push("/dashboard/blacklists");
  } catch (err) {
    dispatch(actions.loading(false));
    dispatch(actions.addBlacklistFail(err));
  }
};

const updateBlacklist = (data, history) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const res = await apiService.putResource(`blacklists/${data.id}`, data);
    dispatch(actions.loading(false));
    dispatch(actions.updateBlacklistSuccess(res.data.data));
    history.push("/dashboard/blacklists");
  } catch (err) {
    dispatch(actions.loading(false));
    dispatch(actions.updateBlacklistFail(err));
  }
};

const deleteBlacklist = (data) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const res = await apiService.deleteResource(`blacklists/${data}`);
    dispatch(actions.loading(false));
    dispatch(actions.deleteBlacklistSuccess(res.data.data));
  } catch (err) {
    dispatch(actions.loading(false));
    dispatch(actions.deleteBlacklistFail(err));
  }
};

export { getBlacklists, updateBlacklist, deleteBlacklist, addBlacklist, getBlacklist };
