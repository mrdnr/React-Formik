import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("It is mandatory to enter email."),
  age: yup
    .number("Entry Number")
    .positive("Only positive number")
    .integer("Enter an integer")
    .min(18, "Must be over 18 years old")
    .required("It is mandatory to enter age."),
  password: yup
    .string()
    .min(5, "Password must have a minimum of 5 characters")
    .matches(passwordRules, {
      message:
        "Enter at least 1 lowercase letter, 1 uppercase letter and 1 number.",
    })
    .required("It is mandatory to enter password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password does not match")
    .required("Entering Password again is mandatory"),
});


// --------------------------------------


export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be min 3 characters")
    .required("It is mandatory to enter username."),
  university: yup
    .string()
    .oneOf(
      ["bogazici", "odtu", "itu", "oxford"],
      "Please select your University"
    )
    .required("Choosing a university is mandatory"),
  isAccepted: yup.boolean().oneOf([true], "Agree to the terms of use."),
});
