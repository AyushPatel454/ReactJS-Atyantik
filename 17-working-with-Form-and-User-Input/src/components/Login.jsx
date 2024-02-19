import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false); // for updating UI if email is invalid.

  const email = useRef();
  const password = useRef();

  // handle form submit.
  function handleSubmit(event) {
    event.preventDefault(); // prevent default form submission. (not reload the page - not send form data.)
    console.log("Submit!");

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@"); // check email is valid or not. (if invalid then show error message.)

    // email is invalid.
    if(!emailIsValid) {
      setEmailIsInvalid(true); // update the UI.
      return;
    }

    setEmailIsInvalid(false); // if 1st time invalid then email is invalid & 2nd time email is valid then we need to again update the UI & state and make email is valid.

    console.log("Sending HTTP request... ... ...");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button>Login</button>
      </p>
    </form>
  );
}
