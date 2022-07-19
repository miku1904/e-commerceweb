import React from "react";
import Style from "./SignIn.module.css"
import { Link } from "react-router-dom";



const SignIn = () => {
  return (
    <>
      <div className={Style.SignIn}>
        <p>Welcome back! 👋</p>
        <h3>Sign in to your account</h3>
        <form className={Style.SignInForm}>
          <label className={Style.InputLable}>Your email</label>
          <input className={Style.SigInInput} type="text"></input>
          <lebel className={Style.InputLable}>Password</lebel>
          <input className={Style.SigInInput} type="text"></input>
          <button type="submit">CONTINUE</button>
        </form>
      </div>
      <div className={Style.link}>
        <p>
          Don’t have an account?<Link to="/SignUp">Sign up</Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;