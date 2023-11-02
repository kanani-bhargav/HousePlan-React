import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_SUB_CATEGORY_PROGRESS } from "../../redux-saga/all_saga/action/action";
import Navbar from "./Navbar";

const Category = () => {
  const data = useSelector((state) => state.subCategoryReducer);

  return (
    <>
    <Navbar container={"container-fluid"}/>
    <div className="container-fluid">
      <div className="row py-3">
      <div className="col-lg-3">
        <div className="card">
        <div className="card-header">
        <h6>Collection</h6>
        <h6 className="ps-2">{console.log(data.subcategory)}</h6>
  </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">

            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div>
          <h2></h2>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Category;
