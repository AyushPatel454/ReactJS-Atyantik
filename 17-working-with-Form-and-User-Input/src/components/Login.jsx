import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  // handle form submit.
  function handleSubmit(event) {
    event.preventDefault(); // prevent default form submission. (not reload the page - not send form data.)
    console.log("Submit!");

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log("User Email: "+ enteredEmail +" Password: " + enteredPassword);
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
