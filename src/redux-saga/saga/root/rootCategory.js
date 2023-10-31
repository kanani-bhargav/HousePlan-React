import { takeLatest } from "redux-saga/effects";
import {
  DELETE_CATEGORY_PROGRESS,
  GET_CATEGORY_PROGRESS,
  GET_CHILD_SUB_CATEGORY_PROGRESS,
  GET_SUB_CATEGORY_PROGRESS,
  POST_CATEGORY_PROGRESS,
  UPDATE_CATEGORY_PROGRESS,
} from "../../all_saga/action/action";
import {
  handleDeleteCategory,
  handleGetCatgory,
  handleGetChildSubCatgory,
  handleGetSubCatgory,
  handlePostCategory,
  handleUpdateCategory,
} from "../saga_manage/manageCategory";

/**
 *  reusable function saga
 * @param {*} GET_PROGRESS  pass action as a parameter
 * @param {*} manageFunction pass function as parameter
 * @returns
 */
const getSaga = (GET_PROGRESS, manageFunction) => {
  return function* () {
    yield takeLatest(GET_PROGRESS, manageFunction);
  };
};

// GET category data
export const getCategorySaga = getSaga(GET_CATEGORY_PROGRESS, handleGetCatgory);

export const getSubCategorySaga = getSaga(
  GET_SUB_CATEGORY_PROGRESS,
  handleGetSubCatgory
);
export const getChildSubCategorySaga = getSaga(
  GET_CHILD_SUB_CATEGORY_PROGRESS,
  handleGetChildSubCatgory
);

// POST category data
export const postCategorySaga = getSaga(
  POST_CATEGORY_PROGRESS,
  handlePostCategory
);

// delete category data
export const deleteCategorySaga = getSaga(
  DELETE_CATEGORY_PROGRESS,
  handleDeleteCategory
);

// update category data
export const updateCategorySaga = getSaga(
  UPDATE_CATEGORY_PROGRESS,
  handleUpdateCategory
);
