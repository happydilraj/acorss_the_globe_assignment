import React from 'react'
import "../style/style.css";
import { Link } from 'react-router-dom';

export default function Singlesignon() {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="row ">
          <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center  d-flex align-self-center">
            <form className="rounded bg-white shadow p-5  " style={{margin: "21vh 0vh"}}>
              <h1>Login to Figma with SAML SSO</h1>

              <div className="form-group ">
                <label htmlFor="exampleInputEmail1"></label>
                <input
                  type="email"
                  className="form-control border border-primary" 
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  autoFocus
                />
              </div>

              <button type="submit" id='btn3' className="btn btn-light submit_btn w-100 my-4">
                Log in
              </button>

              <Link className='text-decoration-none text-underline-hover' to="/">Log in with Google or a password</Link>


              
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
