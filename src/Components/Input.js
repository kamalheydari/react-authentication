import React, { useEffect } from "react";
// import { useLocation } from "react-router";
import { useAuthContext } from "../context/AuthContext";

const Input = ({ label, type, name }) => {
  // const { pathname } = useLocation();
  const {
    changeHandler,
    signUpData,
    focusHandler,
    errors,
    touched,
    path,
    logInData,
  } = useAuthContext();

  return (
    <div className="form__control">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={path === "/signup" ? signUpData[name] : logInData[name]}
        onChange={changeHandler}
        onFocus={focusHandler}
      />
      {errors[name] && touched[name] && <span>{errors[name]}</span>}
    </div>
  );
};

export default Input;
