import { useState } from "react";

import { ChangeEvent } from "react";

const useForm = (validate: (input: string) => boolean) => {
    const [inputField, updateInputField] = useState<string>("");
    const [focusStatus, setFocusStatus] = useState<boolean>(false);

    const validation = validate(inputField);
    const hasError = !validation && focusStatus;

    const updateInput = (event: ChangeEvent<HTMLInputElement>) => {
        updateInputField(event.target.value);
    };

    const updateFocus = () => {
        setFocusStatus(true);
    };

    const reset = () => {
        updateInputField("");
        setFocusStatus(false);
    };

    return [
        inputField,
        updateInput,
        focusStatus,
        updateFocus,
        reset,
        hasError,
    ] as const;
};

export default useForm;
