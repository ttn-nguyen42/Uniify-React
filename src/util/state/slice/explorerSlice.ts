import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ExplorerState } from "../../types/State";

export const explorerSlice = createSlice({
    name: "explorer",
    initialState: {
        namePunctuation: "Hà Nội",
        location: "ha-noi",
        category: "kinh-doanh-kinh-te",
    } as ExplorerState,
    reducers: {
        updateLocation: (
            state: ExplorerState,
            payload: PayloadAction<string>
        ) => {
            state.location = payload.payload;
        },
        updateName: (state: ExplorerState, payload: PayloadAction<string>) => {
            state.namePunctuation = payload.payload;
        },
        updateCurrentCategory: (
            state: ExplorerState,
            payload: PayloadAction<string>
        ) => {
            state.category = payload.payload;
        },
    },
});

export const { updateLocation, updateName, updateCurrentCategory } =
    explorerSlice.actions;

export default explorerSlice.reducer;
