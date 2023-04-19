import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Code for making login request to server
    // Assuming server returns access token as response
    const accessToken = "some_access_token";
    login(accessToken);
  };

  return (
    <div className="flex items-center h-screen mx-auto text-center">
      <div className="bg-white w-96 shadow-xl rounded p-5 mx-auto">
        <h1 className="text-3xl font-medium">Welcome</h1>
        <form className="space-y-5 mt-5">
          <input
            type="text"
            className="w-full h-12 border border-gray-800 rounded px-3"
            placeholder="Email"
          />
          <div className="w-full flex items-center border border-gray-800 rounded px-3">
            <input
              type="password"
              className="w-4/5 h-12"
              placeholder="Password"
            />
            <span className="text-blue-700 hover:bg-blue-100 rounded-md px-3">
              Show
            </span>
          </div>

          {/* <div className="">
            <a
              href="#"
              className="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">
              Forgot Password ?
            </a>
          </div> */}

          <button className="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
