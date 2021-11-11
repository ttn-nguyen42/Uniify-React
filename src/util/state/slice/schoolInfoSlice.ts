import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SchoolInfoNavigatorState } from "../../types/State";

const initialState: SchoolInfoNavigatorState = {
    currentMajor: "",
};

export const schoolInfoSlice = createSlice({
    name: "schoolInfoNavigator",
    initialState,
    reducers: {
        updateMajor: (state, action: PayloadAction<string>) => {
            state.currentMajor = action.payload;
        },
    },
});

export const { updateMajor } = schoolInfoSlice.actions;

export default schoolInfoSlice.reducer;
