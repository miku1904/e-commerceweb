import React, {useState} from "react";
import Style from "./SignUp.module.css"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db} from "../../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { Link } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
    role:"user"
  });

  function handleChange(e) {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  }
  console.log(data);

  const  handleSubmit = (e) =>{
    e.preventDefault();
    const user = createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async () => {
        await addDoc(collection(db, "user"), {
          name: data.name,
          email: data.email,
          password: data.password,
          role:data.role,
        });
      })
      .catch((error) => { 
        console.log(error.message);
      });
  }




  return (
    <>
      <div className={Style.SignUp}>
        <p>Welcome back! 👋</p>
        <h3>Sign Up your account</h3>
        <form className={Style.SignUpForm} onSubmit={handleSubmit}>
          <label className={Style.InputLable}>NAME</label>
          <input
            className={Style.SigUpInput}
            value={data.name}
            name="name"
            type="text"
            onChange={handleChange}
          ></input>
          <label className={Style.InputLable}>Your email</label>
          <input
            className={Style.SigUpInput}
            value={data.email}
            type="text"
            name="email"
            onChange={handleChange}
          ></input>
          <lebel className={Style.InputLable}>Password</lebel>
          <input
            className={Style.SigUpInput}
            value={data.password}
            type="Password"
            name="password"
            onChange={handleChange}
          ></input>
          <button className={Style.SigupButton}type="submit">CONTINUE</button>
        </form>
      </div>
      <div className={Style.link}>
        <p>
          you have an account?<Link to="/">SignIn</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
