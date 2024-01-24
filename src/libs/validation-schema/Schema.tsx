import * as Yup from "yup";
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//RECRUITER SIGNUP FORM SCHEMA
export const RecruiterSignUpSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid email format must have @")
    .matches(emailRegExp, "Please enter valid email e.g example@domain.com")
    .required("Sorry, this is required"),
});









