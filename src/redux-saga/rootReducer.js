import { combineReducers } from "redux";
import {categoryReducer,subCategoryReducer,childSubCategoryReducer} from "./all_saga/reducer/reducer";


const rootReducers = combineReducers({
  categoryReducer,
  subCategoryReducer,
  childSubCategoryReducer
});

export default rootReducers;
