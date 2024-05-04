import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import wolf from "../IMG/wolf.svg";
import logo from "../IMG/logo.svg";

const Signup = () => {
  const [signup, setSignup] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });

  return (
    <main className="bgimg2 d-flex py-4 pe-5 align-items-centerz">
      <div className="w-25 h-100 d-grid align-items-center">
        <img src={wolf} alt="..." className="h-75" />
      </div>
      <div className="bg-white clip-box w-75 h-100 py-3 px-5 rounded-3 d-flex flex-column align-items-end">
        <img src={logo} alt="..." className="flex align-items-center justify-content-center" />
        <form
          method="post"
          className="d-flex flex-column align-items-end text-primary fw-semibold gap-2 w-75"
        >
          <h3>Sign up</h3>
          <div className="w-100">
            <label htmlFor="middlename">FullName</label>
            <input
              type="text"
              placeholder="FullName"
              className="w-100 px-2 py-1 rounded-5 border-2 border-primary"
              value={signup.middlename}
              onChange={(e) => {
                setSignup({ ...signup, fullname: e.target.value.trim() });
              }}
            />
          </div>
          <div className="w-100">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-100 px-2 py-1 rounded-5 border-2 border-primary"
              value={signup.email}
              onChange={(e) => {
                setSignup({ ...signup, email: e.target.value.trim() });
              }}
            />
          </div>
          <div className="w-100">
            <label htmlFor="tel">Username</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-100 px-2 py-1 rounded-5 border-2 border-primary"
              value={signup.username}
              onChange={(e) => {
                setSignup({ ...signup, username: e.target.value.trim() });
              }}
            />
          </div>
          <div className="w-100 d-flex gap-3">
            <div className="w-50">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="Create a Password"
                className="w-100 px-2 py-1 rounded-5 border-2 border-primary"
                value={signup.password}
                onChange={(e) => {
                  setSignup({ ...signup, password: e.target.value.trim() });
                }}
              />
            </div>
            <div className="w-50">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="text"
                placeholder="Confirm Password"
                className="w-100 px-2 py-1 rounded-5 border-2 border-primary"
                value={signup.cpassword}
                onChange={(e) => {
                  setSignup({ ...signup, cpassword: e.target.value.trim() });
                }}
              />
            </div>
          </div>

          <button
            className="w-100 px-2 py-1 mt-3 text-white fw-semibold rounded-5 bg-primary border-2 border-primary"
            onClick={(e) => {
              e.preventDefault();
              console.log(signup);
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
