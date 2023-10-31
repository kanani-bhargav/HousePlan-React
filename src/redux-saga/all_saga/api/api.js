import axios from "axios";
import { BASE_URL, GET_CATEGORY, GET_CHILD_SUB_CATEGORY, GET_SUB_CATEGORY, POST_CATEGORY } from "../../constant";

/**
 * reusable function for get data
 */
const createGetData = (getRoute) => {
 return async() => {
    const header = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    return axios
      .get(BASE_URL + getRoute, header)
      .then((res) => {
        const data = res.data;
        const status = res.status;
        // console.log('File: api.js', 'Line 15:', data);
        return {
          data,
          status,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCategory = createGetData(GET_CATEGORY);
export const getSubCategory = createGetData(GET_SUB_CATEGORY);
export const getChildSubCategory = createGetData(GET_CHILD_SUB_CATEGORY);

/**
 *reusable function for post data
 */
 const createPostData = (getRoute) => {
  return async(data) => {
    console.log(data, "this is data is from api side");
    const header = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    return axios
      .post(BASE_URL + getRoute, data, header)
      .then((res) => {
        const data = res.data;
        const status = res.status;
        return {
          data,
          status,
        };
      })
      .catch((err) => {
        console.log(err);
      });
   };
 };

export const postCategory = createPostData(POST_CATEGORY);
