import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

//? Data
import { inputsData } from "../assets/data/inputsData";

//? Components
import Input from "./Input";

//? Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  //? Context
  const { submitHandler, signUpData, setPath } = useAuthContext();

  const { pathname } = useLocation();

  useEffect(() => {
    setPath(pathname);
  }, []);

  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <h2 className="form__title">SignUp</h2>
        <div className="form__inputs">
          {inputsData.map((input) => (
            <Input key={input.id} {...input} data={signUpData} />
          ))}
        </div>
        <div className="form__btn">
          <button type="submit">SignUp</button>
        </div>
        <div className="form__link">
          <p>Already have an account?</p>
          <Link to="/login">LogIn</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
