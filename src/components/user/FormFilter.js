import React from "react";

const FormFilter = () => {
  return (
    <div className="form-filter-wrapeer text-center ">
      <form>
        <ul>
          <li className="pb-2">
            <h6 className="form-filter-head mb-1">Bedrooms</h6>
            <div className="d-flex justify-content-center ">
              <button
                className="form-btn"
                type="button"
                id="bedroom_1"
              >
                1
              </button>
              <button
                className="form-btn"
                type="button"
                id="bedroom_2"
              >
                2
              </button>
              <button
                className="form-btn"
                type="button"
                id="bedroom_3"
              >
                3
              </button>
              <button
                className="form-btn"
                type="button"
                id="bedroom_4"
              >
                4
              </button>
              <button
                className="form-btn"
                type="button"
                id="bedroom_5"
              >
                5
              </button>
            </div>
          </li>
          <li className="pb-2">
            <h6 className="form-filter-head mb-1">Bathrooms</h6>
            <div className="d-flex justify-content-center ">
              <button
                className="form-btn"
                type="button"
                id="bathroom_1"
              >
                1
              </button>
              <button
                className="form-btn"
                type="button"
                id="bathroom_2"
              >
                2
              </button>
              <button
                className="form-btn"
                type="button"
                id="bathroom_3"
              >
                3
              </button>
              <button
                className="form-btn"
                type="button"
                id="bathroom_4"
              >
                4+
              </button>
            </div>
            <div className="d-flex justify-content-center ">
              <button
                className="form-btn "
                type="button"
                id="bathroom_1.5"
              >
                1.5
              </button>
              <button
                className="form-btn "
                type="button"
                id="bathroom_2.5"
              >
                2.5
              </button>
              <button
                className="form-btn "
                type="button"
                id="bathroom_3.5"
              >
                3.5
              </button>
            </div>
          </li>
          <li className="pb-2">
            <h6 className="form-filter-head mb-1">Stories</h6>
            <div className="d-flex justify-content-center ">
              <button
                className="form-btn"
                type="button"
                id="stories_1"
              >
                1
              </button>
              <button
                className="form-btn"
                type="button"
                id="stories_2"
              >
                2
              </button>
              <button
                className="form-btn"
                type="button"
                id="stories_3"
              >
                3+
              </button>
            </div>
          </li>
          <li className="pb-2">
            <h6 className="form-filter-head mb-1">Garages</h6>
            <div className="d-flex justify-content-center ">
              <button
                className="form-btn"
                type="button"
                id="garages_0"
              >
                0
              </button>
              <button
                className="form-btn"
                type="button"
                id="garages_1"
              >
                1
              </button>
              <button
                className="form-btn"
                type="button"
                id="garages_2"
              >
                2
              </button>
              <button
                className="form-btn"
                type="button"
                id="garages_3"
              >
                3+
              </button>
            </div>
          </li>
          <li className="pb-2">
            <h6 className="form-filter-head mb-1">Sq Ft</h6>
           <input type="" name="sq_ft" id="" className="form-filter-input" placeholder="Sq ft"/>
          </li>
          <li >
            <button className="form-filter-search "
                type="button"
                id="">Search Plans</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default FormFilter;
