import { apiService } from "@infrastructure";

const getItems = (actions, path) => async (dispatch) => {
  try {
    dispatch(actions.loading(true));
    const response = await apiService.getResource(path);
    dispatch(actions.loading(false));
    dispatch(actions.getItemsSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.getItemsFail(errors));
  }
};

const getItem = (actions, path) => async (dispatch) => {
  try {
    dispatch(actions.loading(true));
    const response = await apiService.getResource(path);
    dispatch(actions.loading(false));
    dispatch(actions.getItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.getItemFail(errors));
  }
};

const createItem = (actions, path, data, callBackUrl, history) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const response = await apiService.postResource(path, data);
    dispatch(actions.loading(false));
    dispatch(actions.createItemSuccess(response));
    history.push(callBackUrl);
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.createItemFail(errors));
  }
};

const updateItem = (actions, path, data, callBackUrl, history) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const response = await apiService.putResource(path, data);
    dispatch(actions.loading(false));
    dispatch(actions.updateItemSuccess(response));
    history.push(callBackUrl);
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.updateItemFail(errors));
  }
};

const deleteItem = (actions, path) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const response = await apiService.deleteResource(path);
    dispatch(actions.loading(false));
    dispatch(actions.deleteItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.deleteItemFail(errors));
  }
};

export { getItems, getItem, updateItem, deleteItem, createItem };
