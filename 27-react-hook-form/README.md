# React Hook Form Usage

React Hook Form is a lightweight and efficient library for managing form states in React applications. This guide will walk you through the basic usage of React Hook Form.

## Installation

To install React Hook Form, use the following command:

```bash
npm install react-hook-form
```

## Basic Usage
First, import the `useForm` hook from the `react-hook-form` package:

```bash
import { useForm } from "react-hook-form";
```

The `useForm` hook returns an object with methods for managing form state:

```javascript
const {
    register, // for registering the input fields
    handleSubmit, // for submitting the form
    setError, // for setting custom errors (e.g., from the server)
    reset, // for resetting the form
    formState: { errors, isDirty, isSubmitting, isSubmitSuccessful, isSubmitted },
} = useForm();
```

## Form Submission
To handle form submission, use the handleSubmit method. This method takes a callback function that will be called with the form data when the form is submitted:
```javascript
const onSubmit = async (data) => {
    console.log(data);
    // handle form submission here
};

<form onSubmit={handleSubmit(onSubmit)}>
    {/* form fields go here */}
</form>
```

## Form Fields
To register form fields, use the register method. This method should be spread into the props of your form fields:
```javascript
<input
    placeholder="Name"
    type="text"
    {...register("name", {
        required: true,
        minLength: { value: 3, message: "Minimum length is 3" },
    })}
/>
```
In the above example, the `name` field is required and must have a minimum length of 3.

## Form State
The `formState` object contains information about the state of the form:

`errors`: An object containing any validation errors.
`isDirty`: A boolean indicating whether any form fields have been changed.
`isSubmitting`: A boolean indicating whether the form is currently being submitted.
`isSubmitSuccessful`: A boolean indicating whether the last form submission was successful.
`isSubmitted`: A boolean indicating whether the form has been submitted at least once.

## Resetting the Form
To reset the form, use the `reset` method:
```javascript
setError("name", {
    message: "Name should be amysh"
});
```
In the above example, an error is set on the `name` field with the message "Name should be amysh"

## Other Important Usages:
`getValues()`: For getting all the fields values.
`setValues()`: For set the value of specify fields.
`watch()`: Allows you to watch specified input/inputs and return their values. 
`getFieldState()`: It allows you to access specific state information about a particular field in your form.
```javascript
const { getFieldState } = useForm();

// later in your code
const nameFieldState = getFieldState('name');
```
   
The `getFieldState` method returns an object with the following properties:
- `isTouched`: A boolean indicating whether the field has been touched.
- `isDirty`: A boolean indicating whether the field's value has changed.
- `isValid`: A boolean indicating whether the field's value is valid according to validation rules.
- `error`: An object containing any validation errors for the field.