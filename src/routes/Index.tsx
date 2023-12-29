import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninForm from "../_auth/containers/forms/SigninForm";
import SignupForm from "../_auth/containers/forms/SignupForm";
import HomePage from "../_root/pages/Home.page";
import AuthLayout from "../_auth/layout/AuthLayout";
import RootLayout from "../_root/layout/RootLayout";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
