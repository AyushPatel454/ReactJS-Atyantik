import { useState } from 'react';

export function useInput(defaultValue, validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    // when input field is change ---> update the state with current input field values.
    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }

    return { value: enteredValue, handleInputChange, handleInputBlur, hasError: didEdit && !valueIsValid};
}