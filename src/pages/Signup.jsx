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
    <main className="bgimg2 d-flex py-4 pe-5 align-items-centerz">
      <div className="w-25 h-100 d-grid align-items-center">
        <img src={wolf} alt="..." className="h-75" />
      </div>
      <div className="bg-secondary shadow clip-box w-75 h-100 py-3 px-5 rounded-3 d-flex flex-column align-items-end">
        <img src={logo} alt="..." className="flex align-items-center justify-content-center" />
        <form
          method="post"
          className="d-flex flex-column align-items-end text-primary fw-semibold gap-2 w-75 mb-3 border-2 border-bottom border-primary"
        >
          <h3>Sign up</h3>
          <div className="w-100">
            <label htmlFor="middlename">FullName</label>
            <input
              type="text"
              placeholder="FullName"
              className="w-100 px-2 py-1 rounded-5 shadow-sm border border-white"
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
              className="w-100 px-2 py-1 rounded-5 shadow-sm border border-white"
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
              className="w-100 px-2 py-1 rounded-5 shadow-sm border border-white"
              value={signup.username}
              onChange={(e) => {
                setSignup({ ...signup, username: e.target.value.trim() });
              }}
            />
            <small></small>
          </div>

          <div className="w-100 d-flex gap-3">
            <div className="w-50">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="Create a Password"
                className="w-100 px-2 py-1 rounded-5 shadow-sm border border-white"
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
                className="w-100 px-2 py-1 rounded-5 shadow-sm border border-white"
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
              <input type="checkbox" className="bg-primary" value={signup.tnc} onChange={(e) => {setSignup({...signup, tnc: e.target.checked})}} />
              <p className="m-0">I Agree to the Terms and Conditions</p>
            </div>
            <small></small>
          </div>

          <button
            className="w-100 px-2 py-1 text-white fw-semibold rounded-5 bg-primary border-2 border-primary"
            onClick={(e) => {
              e.preventDefault();
              console.log(signup);
            }}
          >
            Create Account
          </button>

          <p className="w-100">Already Have an Account? <Link to='/login' className="text-decoration-none">Log in</Link> Here</p>
          <p className="w-75 flex justify-content-center m-0 ml-n5">Continue with</p>
        </form>
        {/* <p className="w-75 flex justify-content-center m-0 mt-n4">Continue with</p> */}

{/* This part is the frontend for Google and Facebook Authentication */}
        <div className="w-75 d-flex gap-5">
          <div className="w-50">
            <button className="w-100 p-2 rounded-5 bg-white text-primary fw-semibold">Google</button>
          </div>
          <div className="w-50">
            <button className="w-100 p-2 rounded-5 bg-primary text-white fw-semibold border-0">Facebook</button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Signup;
