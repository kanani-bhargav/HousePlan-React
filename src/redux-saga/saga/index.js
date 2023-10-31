import { all } from "@redux-saga/core/effects";
import {
  deleteCategorySaga,
  getCategorySaga,
  getChildSubCategorySaga,
  getSubCategorySaga,
  postCategorySaga,
  updateCategorySaga,
} from "./root/rootCategory";

export function* rootSaga() {
  yield all([
    getCategorySaga(),
    getSubCategorySaga(),
    getChildSubCategorySaga(),
    postCategorySaga(),
    deleteCategorySaga(),
    updateCategorySaga(),
  ]);
}
