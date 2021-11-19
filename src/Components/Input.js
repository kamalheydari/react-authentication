import React from "react";
import { useAuthContext } from "../context/AuthContext";

const Input = ({ label, type, name, placeholder, data }) => {
  //? Context
  const { changeHandler, focusHandler, errors, touched } = useAuthContext();

  return (
    <div className="form__control">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        value={data[name]}
        onChange={changeHandler}
        onFocus={focusHandler}
        className={errors[name] && touched[name] && "uncompleted"}
      />
      <span>{errors[name] && touched[name] && errors[name]}</span>
    </div>
  );
};

export default Input;
