import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { inputsData } from "../assets/data/inputsData";
import { useAuthContext } from "../context/AuthContext";

//? Components
import Input from "./Input";

//? Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  //? Context
  const { submitHandler, logInData, setPath } = useAuthContext();

  const { pathname } = useLocation();

  useEffect(() => {
    setPath(pathname);
  }, []);

  return (
    <div className="container">
      <form className="form"  onSubmit={submitHandler}>
        <h2 className="form__title">LogIn</h2>
        <div className="form__inputs">
          {inputsData.slice(1, 3).map((input) => (
            <Input key={input.id} {...input} data={logInData} />
          ))}
        </div>
        <div className="form__btn">
          <button type="submit">LogIn</button>
        </div>
        <div className="form__link">
          <p>Need an account?</p>
          <Link to="/signup">SignUp</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
