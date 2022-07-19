import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../signIn/SigIn";
import SignUp from "../signUp/SignUp";



function ApplicationRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default ApplicationRoutes;
