import { call, put } from "redux-saga/effects";
import { getCategory, getChildSubCategory, getSubCategory, postCategory } from "../../category/api/api";
import {
  GET_CATEGORY_ERROR,
  GET_CATEGORY_SUCCESS,
  GET_CHILD_SUB_CATEGORY_ERROR,
  GET_CHILD_SUB_CATEGORY_SUCCESS,
  GET_SUB_CATEGORY_ERROR,
  GET_SUB_CATEGORY_SUCCESS,
  POST_CATEGORY_ERROR,
  POST_CATEGORY_SUCCESS,
} from "../../category/action/action";

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
export function* handlePostCatgory(action) {
  try {
    const res = yield call(postCategory, action.payload);
    const status = res.status;
    const data = res.data.data;
    if (status === 200) {
      yield put({ type: POST_CATEGORY_SUCCESS, data });
    } else {
      yield put({ type: POST_CATEGORY_ERROR, data });
    }
  } catch (e) {
    yield put({ type: POST_CATEGORY_ERROR, e });
  }
}
