import React from "react";
import { Navigator } from "../../components/navbar/Navigator";
import { LoginForm } from "../../components/login/LoginForm";

export const Login = () => {
  return (
    <div>
      <Navigator />
      <div className="tw-h-screen tw-flex tw-flex-col">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
