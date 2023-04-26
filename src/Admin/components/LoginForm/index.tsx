import { SignIn } from "@clerk/clerk-react";
import React, { useState } from "react";

const LoginForm = () => {
  return (
    <div className="flex items-center h-screen mx-auto text-center justify-center">
      <SignIn />
    </div>
  );
};

export default LoginForm;
