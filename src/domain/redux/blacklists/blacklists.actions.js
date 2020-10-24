import blacklistsConstants from "./blacklists.constants";

const loading = (data) => ({
  type: blacklistsConstants.BLACKLISTS_LOADING,
  payload: data,
});

const getBlacklists = (data) => ({
  type: blacklistsConstants.GET_BLACKLISTS,
  payload: data,
});

const getBlacklistsSuccess = (data) => ({
  type: blacklistsConstants.GET_BLACKLISTS_SUCCESS,
  payload: data,
});

const getBlacklistsFail = (data) => ({
  type: blacklistsConstants.GET_BLACKLISTS_FAIL,
  payload: data,
});

const getBlacklist = (data) => ({
  type: blacklistsConstants.GET_BLACKLIST,
  payload: data,
});

const getBlacklistSuccess = (data) => ({
  type: blacklistsConstants.GET_BLACKLIST_SUCCESS,
  payload: data,
});

const getBlacklistFail = (data) => ({
  type: blacklistsConstants.GET_BLACKLIST_FAIL,
  payload: data,
});

/* ADD */
const addBlacklist = (data) => ({
  type: blacklistsConstants.ADD_BLACKLIST,
  payload: data,
});

const addBlacklistSuccess = (data) => ({
  type: blacklistsConstants.ADD_BLACKLIST_SUCCESS,
  payload: data,
});

const addBlacklistFail = (data) => ({
  type: blacklistsConstants.ADD_BLACKLIST_FAIL,
  payload: data,
});

/* UPDATE */
const updateBlacklist = (data) => ({
  type: blacklistsConstants.UPDATE_BLACKLIST,
  payload: data,
});

const updateBlacklistSuccess = (data) => ({
  type: blacklistsConstants.UPDATE_BLACKLIST_SUCCESS,
  payload: data,
});

const updateBlacklistFail = (data) => ({
  type: blacklistsConstants.UPDATE_BLACKLIST_FAIL,
  payload: data,
});

/* DELETE */
const deleteBlacklist = (data) => ({
  type: blacklistsConstants.DELETE_BLACKLIST,
  payload: data,
});

const deleteBlacklistSuccess = (data) => ({
  type: blacklistsConstants.DELETE_BLACKLIST_SUCCESS,
  payload: data,
});

const deleteBlacklistFail = (data) => ({
  type: blacklistsConstants.DELETE_BLACKLIST_FAIL,
  payload: data,
});

export {
  loading,
  getBlacklists,
  getBlacklistsSuccess,
  getBlacklistsFail,
  getBlacklist,
  getBlacklistSuccess,
  getBlacklistFail,
  addBlacklist,
  addBlacklistSuccess,
  addBlacklistFail,
  updateBlacklist,
  updateBlacklistSuccess,
  updateBlacklistFail,
  deleteBlacklist,
  deleteBlacklistSuccess,
  deleteBlacklistFail,
};
