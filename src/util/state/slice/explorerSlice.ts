import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ExplorerState = {
	namePunctuation: string;
	location: string;
};

export const explorerSlice = createSlice({
	name: "explorer",
	initialState: {
		namePunctuation: "Hà Nội",
		location: "Ha Noi",
	} as ExplorerState,
	reducers: {
        updateLocation: (state: ExplorerState, payload: PayloadAction<string>) => {
            state.location = payload.payload;
        },
        updateName: (state: ExplorerState, payload: PayloadAction<string>) => {
            state.namePunctuation = payload.payload;
        }
    },
});

export const {updateLocation, updateName} = explorerSlice.actions;

export default explorerSlice.reducer;
