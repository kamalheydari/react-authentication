import React, { createContext, useContext, useEffect, useState } from "react";
import { validate } from "../Components/validate";

import { notify } from "../Components/toast";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //? Global States
  const [path, setPath] = useState("");
  console.log(path);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: "",
  });

  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  console.log(path);
  useEffect(() => {
    setErrors({});
    setTouched({});
    // setLogInData(logInData);
    // setSignUpData(signUpData);
  }, [path]);

  useEffect(() => {
    setErrors(validate(logInData, path));
  }, [logInData, path]);

  useEffect(() => {
    setErrors(validate(signUpData, path));
  }, [signUpData, path]);

  //? Handlers
  const changeHandler = (event) => {
    if (path === "/signup") {
      if (event.target.name === "isAccepted") {
        setSignUpData({
          ...signUpData,
          [event.target.name]: event.target.checked,
        });
      } else {
        setSignUpData({
          ...signUpData,
          [event.target.name]: event.target.value,
        });
      }
    } else {
      setLogInData({
        ...logInData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      // console.log(data);
      // console.log(Object.keys(errors));
      notify("You signed up successfuly", "success");
    } else {
      notify("Invalid data", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signUpData,
        logInData,
        changeHandler,
        focusHandler,
        submitHandler,
        errors,
        touched,
        setPath,
        path,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
