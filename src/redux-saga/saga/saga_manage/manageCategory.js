import { call, put } from "redux-saga/effects";
import {
  DELETE_CATEGORY_ERROR,
  DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_SUCCESS,
  GET_CHILD_SUB_CATEGORY_ERROR,
  GET_CHILD_SUB_CATEGORY_SUCCESS,
  GET_SUB_CATEGORY_ERROR,
  GET_SUB_CATEGORY_SUCCESS,
  POST_CATEGORY_ERROR,
  POST_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_ERROR,
  UPDATE_CATEGORY_SUCCESS,
} from "../../all_saga/action/action";
import {
  getCategory,
  getSubCategory,
  getChildSubCategory,
  postCategory,
  deleteCategory,
  updateCategory,
} from "../../all_saga/api/api";

const handleGetData = (apiDataFunction, GET_SUCCESS, GET_ERROR) => {
  return function* (action) {
    try {
      const res = yield call(apiDataFunction, action);
      const status = res.status;
      const data = res.data;
      if (status === 200) {
        yield put({ type: GET_SUCCESS, data });
      } else {
        yield put({ type: GET_ERROR, data });
      }
    } catch (error) {
      yield put({ type: GET_ERROR, error });
    }
  };
};

export const handleGetCatgory = handleGetData(
  getCategory,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR
);

export const handleGetSubCatgory = handleGetData(
  getSubCategory,
  GET_SUB_CATEGORY_SUCCESS,
  GET_SUB_CATEGORY_ERROR
);

export const handleGetChildSubCatgory = handleGetData(
  getChildSubCategory,
  GET_CHILD_SUB_CATEGORY_SUCCESS,
  GET_CHILD_SUB_CATEGORY_ERROR
);

// Post School detail
const handlePostData = (apiDataFunction, GET_SUCCESS, GET_ERROR) => {
  return function* (action) {
    try {
      const res = yield call(apiDataFunction, action.payload);
      const status = res.status;
      const data = res.data;
      if (status === 200) {
        yield put({ type: GET_SUCCESS, data });
      } else {
        yield put({ type: GET_ERROR, data });
      }
    } catch (error) {
      yield put({ type: GET_ERROR, error });
    }
  };
};

export const handlePostCategory = handlePostData(
  postCategory,
  POST_CATEGORY_SUCCESS,
  POST_CATEGORY_ERROR
);
export const handleDeleteCategory = handlePostData(
  deleteCategory,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR
);
export const handleUpdateCategory = handlePostData(
  updateCategory,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_ERROR
);
