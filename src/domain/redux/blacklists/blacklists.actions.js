import blacklistsConstants from "./blacklists.constants";

const loading = (data) => ({
  type: blacklistsConstants.BLACKLISTS_LOADING,
  payload: data,
});

/* GET */
const getItemsSuccess = (data) => ({
  type: blacklistsConstants.GET_BLACKLISTS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: blacklistsConstants.GET_BLACKLISTS_FAIL,
  payload: data,
});

/* GET ONE */
const getItemSuccess = (data) => ({
  type: blacklistsConstants.GET_BLACKLIST_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: blacklistsConstants.GET_BLACKLIST_FAIL,
  payload: data,
});

/* CREATE */
const createItemSuccess = (data) => ({
  type: blacklistsConstants.CREATE_BLACKLIST_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: blacklistsConstants.CREATE_BLACKLIST_FAIL,
  payload: data,
});

/* UPDATE */
const updateItemSuccess = (data) => ({
  type: blacklistsConstants.UPDATE_BLACKLIST_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: blacklistsConstants.UPDATE_BLACKLIST_FAIL,
  payload: data,
});

/* DELETE */
const deleteItemSuccess = (data) => ({
  type: blacklistsConstants.DELETE_BLACKLIST_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: blacklistsConstants.DELETE_BLACKLIST_FAIL,
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
