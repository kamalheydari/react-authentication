import React from "react";
import { useAuthContext } from "../context/AuthContext";

const Input = ({ label, type, name, placeholder, id }) => {
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
    <>
      <div className="form__control">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          value={path === "/signup" ? signUpData[name] : logInData[name]}
          className={errors[name] && touched[name] && "uncompleted"}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        <span>{errors[name] && touched[name] && errors[name]}</span>
      </div>
    </>
  );
};

export default Input;
