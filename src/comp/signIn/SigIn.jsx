import React, { useState } from "react";
import Style from "./SignIn.module.css"
import { Link, useNavigate} from "react-router-dom";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



const SignIn = () => {
  const navigate = useNavigate();
  const [ldata, setLData] = useState({
    email: "",
    password: "",
  }); 

const handleLogInChange = (e) =>{
  const value = e.target.value;
  setLData({
    ...ldata,
    [e.target.name]: value,
  });
  
}
console.log(ldata)

const handleSubmit = (e) =>{
   e.preventDefault();
   signInWithEmailAndPassword(auth, ldata.email, ldata.password)
      .then(async (res) => {
        console.log(res.user);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  return (
    <>
      <div className={Style.SignIn}>
        <p>Welcome back! 👋</p>
        <h3>Sign in to your account</h3>
        <form className={Style.SignInForm} onSubmit={handleSubmit}>
          <label className={Style.InputLable}>Your email</label>
          <input
            className={Style.SigInInput}
            onChange={handleLogInChange}
            value={ldata.email}
            name="email"
            type="text"
          ></input>
          <lebel className={Style.InputLable}>Password</lebel>
          <input
            className={Style.SigInInput}
            name="password"
            onChange={handleLogInChange}
            value={ldata.password}
            type="text"
          ></input>
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