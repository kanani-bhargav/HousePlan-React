import {
  DELETE_CATEGORY_ERROR,
  DELETE_CATEGORY_PROGRESS,
  DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_PROGRESS,
  GET_CATEGORY_SUCCESS,
  GET_CHILD_SUB_CATEGORY_ERROR,
  GET_CHILD_SUB_CATEGORY_PROGRESS,
  GET_CHILD_SUB_CATEGORY_SUCCESS,
  GET_SUB_CATEGORY_ERROR,
  GET_SUB_CATEGORY_PROGRESS,
  GET_SUB_CATEGORY_SUCCESS,
  POST_CATEGORY_DUPLICATE,
  POST_CATEGORY_ERROR,
  POST_CATEGORY_PROGRESS,
  POST_CATEGORY_SUCCESS,
  POST_CHILD_SUB_CATEGORY_DUPLICATE,
  POST_CHILD_SUB_CATEGORY_ERROR,
  POST_CHILD_SUB_CATEGORY_PROGRESS,
  POST_CHILD_SUB_CATEGORY_SUCCESS,
  POST_SUB_CATEGORY_DUPLICATE,
  POST_SUB_CATEGORY_ERROR,
  POST_SUB_CATEGORY_PROGRESS,
  POST_SUB_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_ERROR,
  UPDATE_CATEGORY_PROGRESS,
  UPDATE_CATEGORY_SUCCESS,
} from "../action/action";

const initialState = (item) => {
  let itemName = item.toLowerCase();
  let obj = {};
  obj[`${itemName}`] = [];
  obj[`get${item}Progress`] = false;
  obj[`get${item}Error`] = null;

  obj[`post${item}Progress`] = false;
  obj[`post${item}Error`] = null;
  obj[`post${item}Duplicate`] = null;

  obj[`delete${item}Progress`] = false;
  obj[`delete${item}Error`] = null;

  obj[`update${item}Progress`] = false;
  obj[`update${item}Error`] = null;
  obj[`update${item}Duplicate`] = null;

  obj[`${itemName}IsLoaded`] = false;
  return obj;
};
/**
 *
 * @param {name of item} item
 * @param {action} GET_PROGRESS
 * @param {action} GET_SUCCESS
 * @param {action} GET_ERROR
 * @param {action} POST_PROGRESS
 * @param {action} POST_SUCCESS
 * @param {action} POST_DUPLICATE
 * @param {action} POST_ERROR
 * @returns
 */
const dataReducer = (
  item,
  GET_PROGRESS,
  GET_SUCCESS,
  GET_ERROR,
  POST_PROGRESS,
  POST_SUCCESS,
  POST_DUPLICATE,
  POST_ERROR,
  DELETE_PROGRESS,
  DELETE_SUCCESS,
  DELETE_ERROR,
  UPDATE_PROGRESS,
  UPDATE_SUCCESS,
  UPDATE_ERROR
) => {
  const elementReducer = (state = initialState(item), action) => {
    const itemName = item.toLowerCase();
    switch (action.type) {
      case GET_PROGRESS: {
        let obj = {};
        obj[`get${item}Progress`] = true;
        obj[`get${item}Error`] = null;
        obj[`${itemName}IsLoaded`] = false;
        return {
          ...state,
          ...obj,
        };
      }
      case GET_SUCCESS: {
        let obj = {};
        obj[`get${item}Progress`] = false;
        obj[`get${item}Error`] = null;
        obj[`${itemName}IsLoaded`] = true;
        obj[`${itemName}`] = action.data;
        return {
          ...state,
          ...obj,
        };
      }

      case GET_ERROR: {
        let obj = {};
        obj[`get${item}Progress`] = false;
        obj[`get${item}Error`] = action.data;
        obj[`${itemName}IsLoaded`] = false;
        return {
          ...state,
          ...obj,
        };
      }
      // DELETE CATEGORY REDUCER
      case DELETE_PROGRESS: {
        let obj = {};
        obj[`get${item}Progress`] = true;
        obj[`get${item}Error`] = null;
        obj[`${itemName}IsLoaded`] = false;
        return {
          ...state,
          ...obj,
        };
      }
      case DELETE_SUCCESS: {
        console.log("File: reducer.js", "Line 121:", action);
        let obj = {};
        obj[`get${item}Progress`] = false;
        obj[`get${item}Error`] = null;
        obj[`${itemName}IsLoaded`] = true;
        obj[`${itemName}`] = state[`${itemName}`].filter(
          (val) => val._id != action.data
        );
        return {
          ...state,
          ...obj,
        };
      }

      case DELETE_ERROR: {
        let obj = {};
        obj[`get${item}Progress`] = false;
        obj[`get${item}Error`] = action.data;
        obj[`${itemName}IsLoaded`] = false;
        return {
          ...state,
          ...obj,
        };
      }

      // POST CATEGORY REDUCER

      case POST_PROGRESS: {
        let obj = {};
        obj[`post${item}Progress`] = true;
        obj[`post${item}Error`] = null;
        obj[`${itemName}IsLoaded`] = false;
        return {
          ...state,
          ...obj,
        };
      }
      case POST_SUCCESS: {
        let obj = {};
        obj[`post${item}Progress`] = false;
        obj[`post${item}Error`] = null;
        obj[`${itemName}IsLoaded`] = true;
        obj[`${itemName}`] = state[`${itemName}`].concat(
          action.data[`${itemName}`]
        );
        return {
          ...state,
          ...obj,
        };
      }
      case POST_DUPLICATE: {
        let obj = {};
        obj[`post${item}Progress`] = false;
        obj[`post${item}Error`] = action.data;
        obj[`${itemName}IsLoaded`] = false;
        return {
          ...state,
          ...obj,
        };
      }
      case POST_ERROR: {
        let obj = {};
        obj[`post${item}Progress`] = false;
        obj[`post${item}Error`] = action.data;
        obj[`${itemName}IsLoaded`] = false;
        return {
          ...state,
          ...obj,
        };
      }
      // UPDATE CATEGORY REDUCER

      case UPDATE_PROGRESS: {
        let obj = {};
        obj[`post${item}Progress`] = true;
        obj[`post${item}Error`] = null;
        obj[`${itemName}IsLoaded`] = false;
        return {
          ...state,
          ...obj,
        };
      }
      case UPDATE_SUCCESS: {
        let obj = {};
        obj[`post${item}Progress`] = false;
        obj[`post${item}Error`] = null;
        obj[`${itemName}IsLoaded`] = true;
        obj[`${itemName}`] = state[`${itemName}`].map((val) => {
          if (val._id == action.data[`${itemName}`]._id) {
            return action.data[`${itemName}`];
          }
          return val
        });
        return {
          ...state,
          ...obj,
        };
      }
      case UPDATE_ERROR: {
        let obj = {};
        obj[`post${item}Progress`] = false;
        obj[`post${item}Error`] = action.data;
        obj[`${itemName}IsLoaded`] = false;
        return {
          ...state,
          ...obj,
        };
      }

      default:
        return state;
    }
  };
  return elementReducer;
};

/**
 * datareducer function first parameter = capitalize dataname
 * datareducer function second and all after parameter = action pass
 */
export const categoryReducer = dataReducer(
  "Category",
  GET_CATEGORY_PROGRESS,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  POST_CATEGORY_PROGRESS,
  POST_CATEGORY_SUCCESS,
  POST_CATEGORY_DUPLICATE,
  POST_CATEGORY_ERROR,
  DELETE_CATEGORY_PROGRESS,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
  UPDATE_CATEGORY_PROGRESS,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_ERROR
);

export const subCategoryReducer = dataReducer(
  "SubCategory",
  GET_SUB_CATEGORY_PROGRESS,
  GET_SUB_CATEGORY_SUCCESS,
  GET_SUB_CATEGORY_ERROR,
  POST_SUB_CATEGORY_PROGRESS,
  POST_SUB_CATEGORY_SUCCESS,
  POST_SUB_CATEGORY_DUPLICATE,
  POST_SUB_CATEGORY_ERROR
);

export const childSubCategoryReducer = dataReducer(
  "ChildSubCategory",
  GET_CHILD_SUB_CATEGORY_PROGRESS,
  GET_CHILD_SUB_CATEGORY_SUCCESS,
  GET_CHILD_SUB_CATEGORY_ERROR,
  POST_CHILD_SUB_CATEGORY_PROGRESS,
  POST_CHILD_SUB_CATEGORY_SUCCESS,
  POST_CHILD_SUB_CATEGORY_DUPLICATE,
  POST_CHILD_SUB_CATEGORY_ERROR
);
