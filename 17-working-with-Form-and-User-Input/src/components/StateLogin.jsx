import Input from "./Input.jsx";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value)); // for email input field.

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6)); // for password input field.

  // handle form submit.
  function handleSubmit(event) {
    event.preventDefault(); // prevent default form submission. (not reload the page - not send form data.)

    if(emailHasError || passwordHasError) {
      return;
    }

    console.log("Submit!\n"+emailValue+"\n"+passwordValue);
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
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={emailHasError && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onBlur={handlePasswordBlur} // when input field is blur ---> update the state with current input field values.
          onChange={handlePasswordChange}
          error={passwordHasError && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button>Login</button>
      </p>
    </form>
  );
}
