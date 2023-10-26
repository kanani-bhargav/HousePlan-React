import { combineReducers } from "redux";
import {categoryReducer,subCategoryReducer,childSubCategoryReducer} from "./category/reducer/reducer";


const rootReducers = combineReducers({
  categoryReducer,
  subCategoryReducer,
  childSubCategoryReducer
});

export default rootReducers;
