export default function Login() {

  // handle form submit.
  function handleSubmit(event) {
    event.preventDefault(); // prevent default form submission. (not reload the page - not send form data.)
    console.log("Submit!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button>Login</button>
      </p>
    </form>
  );
}
