export const validate = (data, type) => {
  const errors = {};
  console.log(type);
  if (type === "/signup") {
    //? USERNAME ERRORS
    // if (!data.name.trim()) {
    //   errors.name = "Username required";
    // } else {
    //   delete errors.name;
    // }

    //? CONFIRM PASSWORD ERRORS
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the password ";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    } else {
      delete errors.confirmPassword;
    }

    //? POLICY ACCEPT ERRORS
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }
  }
  //? EMAIL ERRORS
  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  //? PASSWORD ERRORS
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password need to be 6 character or more";
  } else {
    delete errors.password;
  }

  return errors;
};
