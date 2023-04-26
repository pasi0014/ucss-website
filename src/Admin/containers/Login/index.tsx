import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { injectIntl } from "react-intl";

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SignIn
        path="/administration/sign-in"
        routing="path"
        signUpUrl="/administration/sign-up"
        afterSignUpUrl="/administration/dashboard"
        afterSignInUrl="/administration/dashboard"
      />
    </div>
  );
}

injectIntl(Login);
