import React from "react";
import { useAuthContext } from "../context/AuthContext";

const Input = ({ label, type, name }) => {
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
        value={path === "/signup" ? signUpData[name] : logInData[name]}
        onChange={changeHandler}
        onFocus={focusHandler}
      />
      {errors[name] && touched[name] && <span>{errors[name]}</span>}
    </div>
  );
};

export default Input;
