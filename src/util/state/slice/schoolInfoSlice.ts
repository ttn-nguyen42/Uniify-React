import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SchoolInfoNavigatorState } from "../../types/State";

const initialState: SchoolInfoNavigatorState = {
	currentMajor: "",
	modalIsShowing: false,
};

export const schoolInfoSlice = createSlice({
	name: "schoolInfoNavigator",
	initialState,
	reducers: {
		toggleModal: (state: SchoolInfoNavigatorState) => {
			state.modalIsShowing = !state.modalIsShowing;
		},
		updateMajor: (
			state: SchoolInfoNavigatorState,
			action: PayloadAction<string>
		) => {
			state.currentMajor = action.payload;
		},
	},
});

export const { updateMajor, toggleModal } = schoolInfoSlice.actions;

export default schoolInfoSlice.reducer;
