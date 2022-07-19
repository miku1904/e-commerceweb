import React from "react";
import Style from "./SignUp.module.css"

const SignUp = () => {
  return (
    <>
      <div className={Style.SignUp}>
        <p>Welcome back! 👋</p>
        <h3>Sign Up  your account</h3>
        <form className={Style.SignUpForm} >
          <label className={Style.InputLable}>NAME</label>
          <input className={Style.SigUpInput} type="text"></input>
          <label className={Style.InputLable}>Your email</label>
          <input className={Style.SigUpInput} type="text"></input>
          <lebel className={Style.InputLable}>Password</lebel>
          <input className={Style.SigUpInput} type="text"></input>
          <button type="submit">CONTINUE</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
