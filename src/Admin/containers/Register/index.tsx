import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { injectIntl } from "react-intl";

export default function Register() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SignUp
        path="/administration/sign-up"
        routing="path"
        signInUrl="/administration/sign-in"
        afterSignUpUrl="/administation/dashboard"
        afterSignInUrl="/administation/dashboard"
      />
    </div>
  );
}

injectIntl(Register);
