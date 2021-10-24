import {useState} from "react";
// Used to check form empty states
export default function useValidator(value: string) {
    // Create a state for focus change
    const [focusChange, updateFocusChange] = useState<boolean>(false);
    const isValid = value.trim().length !== 0;
    const hasError = focusChange && !isValid;
    const changeOfFocusHandler = () => {
        updateFocusChange(true);
    }
    return [changeOfFocusHandler, hasError, focusChange] as const;
}