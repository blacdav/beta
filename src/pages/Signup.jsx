import React, { useState } from "react";
import "../App.scss";
import "../App.css";
import wolf from "../IMG/wolf.svg";
import logo from "../IMG/logo.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signup, setSignup] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
    tnc: false
  });

  return (
    <main className="bgimg2 d-flex py-4 ps-4 pe-4 overflow-hidden align-items-center justify-center">
      <div className="d-none d-md-grid w-25 h-100 align-items-center">
        <img src={wolf} alt="..." className="h-75" />
      </div>
      <div className="container bg-secondary shadow clip-box h-100 py-3 px-4 px-md-5 rounded-3 d-flex flex-column align-items-end">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="border-3 border-primary col-12 col-md-10 grid justify-items-center">
            <div className="d-flex w-100 justify-content-center"><img src={logo} alt="beta logo" /></div>
            <form
              method="post"
              className="d-flex flex-column text-primary fw-semibold gap-2 w-100 mb-3 border-2 border-bottom border-primary"
            >
              <h3>Sign up</h3>
              <div className="w-100">
                <label htmlFor="middlename">FullName</label>
                <input
                  type="text"
                  placeholder="FullName"
                  className="w-100 px-3 py-2 py-md-1 rounded-5 shadow-sm border border-white"
                  value={signup.middlename}
                  onChange={(e) => {
                    setSignup({ ...signup, fullname: e.target.value.trim() });
                  }}
                />
                <small></small>
              </div>
              <div className="w-100">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-100 px-3 py-2 py-md-1 rounded-5 shadow-sm border border-white"
                  value={signup.email}
                  onChange={(e) => {
                    setSignup({ ...signup, email: e.target.value.trim() });
                  }}
                />
                <small></small>
              </div>
              <div className="w-100">
                <label htmlFor="tel">Username</label>
                <input
                  type="tel"
                  placeholder="Username"
                  className="w-100 px-3 py-2 py-md-1 rounded-5 shadow-sm border border-white"
                  value={signup.username}
                  onChange={(e) => {
                    setSignup({ ...signup, username: e.target.value.trim() });
                  }}
                />
                <small></small>
              </div>

              <div className="w-100 d-flex gap-3 fs-6">
                <div className="w-50">
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    placeholder="Create Password"
                    className="w-100 px-3 py-2 py-md-1 rounded-5 shadow-sm border border-white"
                    value={signup.password}
                    onChange={(e) => {
                      setSignup({ ...signup, password: e.target.value.trim() });
                    }}
                  />
                  <small></small>
                </div>

                <div className="w-50">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="w-100 px-3 py-2 py-md-1 rounded-5 shadow-sm border border-white"
                    value={signup.cpassword}
                    onChange={(e) => {
                      setSignup({ ...signup, cpassword: e.target.value.trim() });
                    }}
                  />
                  <small></small>
                </div>
              </div>

              <div className="w-100">
                <div className="d-flex align-items-baseline gap-2">
                  <input type="checkbox" className="accent-primary" value={signup.tnc} onChange={(e) => {setSignup({...signup, tnc: e.target.checked})}} />
                  <p className="m-0">I Agree to the Terms and Conditions</p>
                </div>
                <small></small>
              </div>

              <button
                className="w-100 px-3 py-2 py-md-1 text-white fw-semibold rounded-5 bg-primary border-2 border-primary"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(signup);
                }}
              >
                Create Account
              </button>

              <p className="w-100">Already Have an Account? <Link to='/login' className="text-decoration-none">Log in</Link> Here</p>
              <p className="text-center m-0 translate-middle-y" style={{marginBottom: 15+'px'}}>Continue with</p>
            </form>

    {/* This part is the frontend for Google and Facebook Authentication */}
            <div className="w-100 d-flex gap-3 gap-md-5">
              <div className="w-100">
                <button className="w-100 p-2 rounded-5 bg-white text-primary fw-semibold">Google</button>
              </div>
              <div className="w-100">
                <button className="w-100 p-2 rounded-5 bg-primary text-white fw-semibold border-0">Facebook</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
