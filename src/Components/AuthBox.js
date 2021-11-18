import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Input from "./Input";
import { inputsData } from "../assets/data/inputsData";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthBox = () => {
  const { submitHandler, setPath } = useAuthContext();
  const { pathname } = useLocation();

  useEffect(() => {
    setPath(pathname);
  }, []);

  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <h2 className="form__title">
          {pathname === "/signup" ? "SignUp" : "LogIn"}
        </h2>
        <div className="form__inputs">
          {pathname === "/signup"
            ? inputsData.map((input) => <Input key={input.id} {...input} />)
            : inputsData
                .slice(1, 3)
                .map((input) => <Input key={input.id} {...input} />)}{" "}
        </div>
        <div className="form__btn">
          <button type="submit">
            {pathname === "/signup" ? "SignUp" : "LogIn"}
          </button>
        </div>
        <div className="form__link">
          <p>
            {pathname === "/signup"
              ? "Already have an account?"
              : " Need an account?"}
          </p>
          <Link to={pathname === "/signup" ? "/login" : "/signup"}>
            {pathname === "/signup" ? "LogIn" : "SignUP"}
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AuthBox;
