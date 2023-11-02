import { useDispatch } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { useEffect } from "react";
import { GET_CATEGORY_PROGRESS, GET_CHILD_SUB_CATEGORY_PROGRESS, GET_SUB_CATEGORY_PROGRESS } from "./redux-saga/all_saga/action/action";
import Admin from "./components/admin/Admin";
import Login from "./components/commonComponents/Login";
import Home from "./components/user/Home";
import Category from "./components/user/Category";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_CATEGORY_PROGRESS });
    dispatch({ type: GET_SUB_CATEGORY_PROGRESS});
    dispatch({ type: GET_CHILD_SUB_CATEGORY_PROGRESS});
    // dispatch({ type: GET_SUB_CATEGORY_PROGRESS});
  });

  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Admin/> */}
      <Category/>
    </div>
  );
}

export default App;
