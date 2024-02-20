import { useState } from "react";
import Input from "./Input.jsx";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation.js";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email); // check email is invalid or valid. (if invalid then show error message.)
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6); // check password is invalid or valid.

  // handle form submit.
  function handleSubmit(event) {
    event.preventDefault(); // prevent default form submission. (not reload the page - not send form data.)
    console.log("Submit!");

    console.log(
      "User Email: " +
        enteredValues.email +
        " Password: " +
        enteredValues.password
    );
  }

  // when input field is change ---> update the state with current input field values.
  function handleInputChange(identifier, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));

    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event)}
          error={emailIsInvalid && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredValues.password}
          onBlur={() => handleInputBlur("password")} // when input field is blur ---> update the state with current input field values.
          onChange={(event) => handleInputChange("password", event)}
          error={passwordIsInvalid && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button>Login</button>
      </p>
    </form>
  );
}
