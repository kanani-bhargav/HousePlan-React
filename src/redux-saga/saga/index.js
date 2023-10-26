import { all } from "@redux-saga/core/effects";
import { getCategorySaga, getChildSubCategorySaga, getSubCategorySaga, postCategoySaga } from "./root/rootCategory";

export function* rootSaga() {
  yield all([getCategorySaga(), getSubCategorySaga(), getChildSubCategorySaga(),postCategoySaga()]);
}
