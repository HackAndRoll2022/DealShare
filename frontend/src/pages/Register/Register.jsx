import React from "react";
import { Navigator } from "../../components/navbar/Navigator";
import { SignUp } from "../../components/signup/SignUp";

export const Register = () => {
  return (
    <div>
      <Navigator />
      <div className="tw-h-screen tw-flex tw-flex-col">
        <SignUp />
      </div>
    </div>
  );
};

export default Register;
