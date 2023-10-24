import { useDispatch } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { useEffect } from "react";
import { GET_CATEGORY_PROGRESS } from "./redux-saga/category/action/action";
import Admin from "./components/admin/Admin";
import Login from "./components/commonComponents/Login";
import Home from "./components/user/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_CATEGORY_PROGRESS });
  });

  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Admin /> */}
      <Home/>
    </div>
  );
}

export default App;
