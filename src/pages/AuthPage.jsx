import React from "react";
import { Navigate, useParams } from "react-router-dom";
import LoginForm from "@/auth/LoginForm";
import RegisterForm from "@/auth/RegisterForm";

const AuthPage = () => {
  const { type } = useParams();
  return (
    <>
      {type === "login" && <LoginForm />}
      {type === "register" && <RegisterForm />}
      {type === "callback" && <Navigate replace to="/dashboard" />}
    </>
  );
};

export default AuthPage;
