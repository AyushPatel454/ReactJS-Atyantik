import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register, // for register the input fields.
    handleSubmit, // for submit the form.
    setError, // for set custom error. ( e.g., from the server )
    reset, // for reset the form.
    formState: { errors, isDirty, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm();

  const delay = (s) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, s * 1000);
    });
  };


  const onSubmit = async (data) => {
    await delay(4);
    console.log(data);
    console.log(isDirty);
    // Generate custom error from the server.
    if(data.name !== "amysh") {
      setError("name", {
        message: "Name should be amysh"
      });
    }

    reset();
    console.log(isDirty);
  };

  return (
    <>
    {isSubmitting && <p>Submitting form...</p>}
    {isSubmitted && <p>Form is submitted</p>}
    {isSubmitSuccessful && <p>Form submitted successfully</p>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          type="text"
          {...register("name", {
            required: true,
            minLength: { value: 3, message: "Minimum length is 3" },
            maxLength: { value: 11, message: "Maximum length is 11" },
          })}
        />
        <br />
        {errors.name && <p>{errors.name.message}</p>}
        <input
          placeholder="Email"
          type="text"
          {...register("email", { required: true, pattern: {value: /^\S+@\S+$/i, message: "Not in Valid email format."} })}
        />
        <br />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
