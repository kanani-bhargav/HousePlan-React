import { takeLatest } from "redux-saga/effects";
import {
  GET_CATEGORY_PROGRESS,
  GET_CHILD_SUB_CATEGORY_PROGRESS,
  GET_SUB_CATEGORY_PROGRESS,
  POST_CATEGORY_PROGRESS,
} from "../../category/action/action";
import {
  handleGetCatgory,
  handleGetChildSubCatgory,
  handleGetSubCatgory,
  handlePostCatgory,
} from "../category/manageCategory";

// GET category data
const getSaga = (GET_PROGRESS, manageFunction) => {
  return  function* () {
    yield takeLatest(GET_PROGRESS, manageFunction);
  };
};

export const getCategorySaga = getSaga(GET_CATEGORY_PROGRESS, handleGetCatgory);
export const getSubCategorySaga = getSaga(GET_SUB_CATEGORY_PROGRESS, handleGetSubCatgory);
export const getChildSubCategorySaga = getSaga(GET_CHILD_SUB_CATEGORY_PROGRESS, handleGetChildSubCatgory);

// POST category data
export function* postCategoySaga() {
  yield takeLatest(POST_CATEGORY_PROGRESS, handlePostCatgory);
}
