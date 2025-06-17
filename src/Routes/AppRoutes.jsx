import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPages from "../Pages/LandingPage";
import Login from "../Components/Auth/Login";
import SignUp from "../Components/Auth/SignUp";
import OtpVerification from "../Components/Auth/OtpVerification";

function AppRoutes() {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
