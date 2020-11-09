import usersConstants from "./users.constants";

const loading = (data) => ({
  type: usersConstants.USERS_LOADING,
  payload: data,
});

/* GET */
const getItemsSuccess = (data) => ({
  type: usersConstants.GET_USERS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: usersConstants.GET_USERS_FAIL,
  payload: data,
});

/* GET ONE */
const getItemSuccess = (data) => ({
  type: usersConstants.GET_USER_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: usersConstants.GET_USER_FAIL,
  payload: data,
});

/* CREATE */
const createItemSuccess = (data) => ({
  type: usersConstants.CREATE_USER_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: usersConstants.CREATE_USER_FAIL,
  payload: data,
});

/* UPDATE */
const updateItemSuccess = (data) => ({
  type: usersConstants.UPDATE_USER_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: usersConstants.UPDATE_USER_FAIL,
  payload: data,
});

/* DELETE */
const deleteItemSuccess = (data) => ({
  type: usersConstants.DELETE_USER_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: usersConstants.DELETE_USER_FAIL,
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
