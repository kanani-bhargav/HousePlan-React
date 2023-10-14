import axios from "axios";
import { BASE_URL, GET_CHILD_SUB_CATEGORY } from "../../constant";

export function getChildSubCategory() {
  const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  return axios
    .get(BASE_URL + GET_CHILD_SUB_CATEGORY, header)
    .then((res) => {
      console.log(res, "res from child sub category api");
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
}
