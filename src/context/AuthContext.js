import React, { createContext, useContext, useEffect, useState } from "react";
import { validate } from "../helpers/validate";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //? Global States
  const [path, setPath] = useState("");
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

  //? Reset Errors
  useEffect(() => {
    setErrors({});
    setTouched({});
  }, [path]);

  //? Validate Data
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
      path === "/signup"
        ? toast.success("You signed up successfuly")
        : toast.success("You loged in successfuly");
    } else {
      toast.error("Invalid Data!");
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
