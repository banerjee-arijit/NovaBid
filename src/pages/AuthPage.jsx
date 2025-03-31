import React from "react";
import { useParams } from "react-router-dom";
import LoginForm from "@/auth/LoginForm";
import RegisterForm from "@/auth/RegisterForm";

const AuthPage = () => {
  const { type } = useParams();
  console.log(type);
  return (
    <>
      {type === "login" && <LoginForm />}
      {type === "register" && <RegisterForm />}\{" "}
    </>
  );
};

export default AuthPage;
