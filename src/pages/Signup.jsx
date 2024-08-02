import React, { useState } from "react";
import wolf from "../IMG/wolf.svg";
import logo from "../IMG/logo.png";
import back from "../IMG/arrow-back.svg";
import google from "../IMG/google.png";
import facebook from "../IMG/facebook.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signup, setSignup] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
    tnc: false
  });

  const navigate = useNavigate();

  return (
    <main className="bgimg2 d-flex gap-4 flex-column flex-md-row py-5 py-md-4 ps-3 ps-md-4 pe-3 pe-md-4 h-100 align-items-center justify-content-center">
      <div className="d-none d-md-flex w-25 h-100 align-items-center justify-content-start">
        <img src={wolf} alt="..." className="h-75" />
      </div>
      <div className="d-flex d-md-none justify-content-start w-100">
        <img src={back} alt="back button" onClick={() => navigate(-1)} />
      </div>
      <div className="container bg-whitebg shadow clip-box h-100 py-3 px-3 px-md-5 rounded-4 d-flex flex-column align-items-end">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="border-3 border-primary col-12 grid justify-items-center">
            <div className="d-flex w-100 justify-content-center"><img src={logo} alt="beta logo" /></div>
            <form
              method="post"
              className="d-flex flex-column text-text fw-semibold fs-7 gap-3 w-100 mb-3"
            >
              <h3>Sign up</h3>
              <div className="w-100">
                <label htmlFor="middlename">Fullname</label>
                <input
                  type="text"
                  placeholder="Fullname"
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
                  placeholder="Choose a Username"
                  className="w-100 px-3 py-2 py-md-1 rounded-5 shadow-sm border border-white"
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

              <div className="w-100 my-2">
                <div className="d-flex align-items-center gap-2">
                  <input type="checkbox" className="bg-white border border-whitebg" value={signup.tnc} onChange={(e) => {setSignup({...signup, tnc: e.target.checked})}} />
                  <p className="m-0">I Agree to the Terms and Conditions</p>
                </div>
                <small></small>
              </div>

              <button
                className="w-100 px-3 py-2 py-md-1 text-white fw-semibold rounded-5 bg-blue border-0 btn-outline-blue"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(signup);
                }}
              >
                Create Account
              </button>

              <p className="w-100">Already Have an Account? <Link to='/login' className="text-decoration-none text-blue">Log in</Link> Here</p>
              <p className="text-center m-0 boundary">Continue with</p>
            </form>

    {/* This part is the frontend for Google and Facebook Authentication */}
            <div className="w-100 d-flex gap-3 gap-md-5">
              <div className="w-100">
                <button className="d-flex justify-content-center align-items-center gap-2 h-100 w-100 p-2 rounded-5 bg-white border-0 shadow-sm text-primary fw-semibold">
                  <img src={google} alt="google icon" width={16} className="" />
                  Google
                </button>
              </div>
              <div className="w-100">
                <button className="d-flex gap-2 justify-content-center align-items-center h-100 w-100 p-2 rounded-5 bg-facebook text-white fw-semibold border-0 shadow-sm">
                  <img src={facebook} alt="facebook icon" width={9} />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
