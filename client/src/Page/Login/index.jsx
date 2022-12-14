import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./styles.css";

const Login = () => {
  return (
    <div className="h-screen m-[-50px]  flex justify-center items-center">
      <div className="px-10 py-12 rounded shadow-lg shadow-gray-300/100 flex flex-col gap-5 justify-content-center w-3/12">
        <h3 className="font-bold text-center text-gray-700 text-lg">LOGIN</h3>
        <form className="flex flex-col gap-5">
          <input
            id="username"
            type="text"
            placeholder="Enter Email"
            className="tracking-widest py-3 border border-gray-400 normal-case text-center"
          />

          <input
            id="password"
            type="text"
            placeholder="Enter Password"
            className="tracking-widest py-3 border border-gray-400 normal-case text-center"
          />
          <button className="border border-black p-3 w-full btn">LOGIN</button>
        </form>

        <h3 className="normal-case text-center">
          Create Account?
          <Link to="/sign-up" className="normal-case text-blue-400"> Sign Up</Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;
