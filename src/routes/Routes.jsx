import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "../comp/dashboard/Dashbord";
import SignIn from "../comp/signIn/SigIn";
import SignUp from "../comp/signUp/SignUp";



function ApplicationRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default ApplicationRoutes;
