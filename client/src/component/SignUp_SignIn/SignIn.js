import React, { useState } from "react";
import "./sign-in-up.css";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });
//   console.log(logdata);
  const adddata = (e) => {
    const { name, value } = e.target;

    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="" />
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={adddata}
                  value={logdata.email}
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={logdata.password}
                  name="password"
                  onChange={adddata}
                  placeholder=" At least 6 Char"
                  id="password"
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New To Amazon</p>
            <NavLink to="/register">
              <button>Create Your Amazon Account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
