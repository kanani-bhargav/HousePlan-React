import React from "react";
import './Login.css'

const Login = () => {
  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/originals/eb/f4/31/ebf4310b947b4db11dcf1eafe4b870eb.jpg")',
        }}
      />
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3>
                Login to <strong>House Plan</strong>
              </h3>
              <div className="form-text mb-2 text-dark">Not
              Registered? <a className="text-dark fw-bold"> Create an
                Account</a>
            </div>
              <form >
                <div className="form-group first">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your-email@gmail.com"
                    id="username"
                  />
                </div>
                <div className="form-group last my-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    id="password"
                  />
                </div>
                <div className="d-flex mb-3 align-items-center">
                  <div className="ml-auto">
                    <a href="#" className="forgot-pass">
                      Forgot Password
                    </a>
                  </div>
                </div>
                <input
                  type="submit"
                  defaultValue="Log In"
                  className="btn btn-block btn-secondary w-100"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
