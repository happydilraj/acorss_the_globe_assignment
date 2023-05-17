import React from "react";
import "../style/style.css";
import {Link} from "react-router-dom";

export default function Main() {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="row ">
          <div className="col-sm-9 offset-sm-2 col-md-7 offset-md-3 col-lg-5 offset-lg-4 col-xl-4 offset-xl-4 text-center">
            <form className="rounded bg-white shadow p-5">
              <h2 className="text-dark fw-bolder mb-2">
                Want to check out this file? Log in or sign up
              </h2>

              <button
                type="submit "
                id="btn1"
                className="btn btn-light submit_btn w-100 my-3"
              >
                <i className="fa-brands mx-2 fa-google"></i>Continue with Google
              </button>
              <div id="or">or</div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <input
                  type="email"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1"></label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  autoComplete="off"
                />
              </div>

              <button type="submit" className="btn btn-dark submit_btn w-100 my-4">
                Create account
              </button>

              <p id="info">
                By clicking "Create account" or "Continue with Google", you
                agree to the <a href="#" className="text-decoration-none">Figma TOS</a>  and <a href="#" className="text-decoration-none">Privacy Policy</a> .
              </p>
              <Link id="single_sign_on" className="text-decoration-none" to="/Singlesignon">
                Use single sign-on
              </Link>
              <p id="already" className="my-3">
                Already have an account?
                <Link className="text-decoration-none" to="/Login">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
