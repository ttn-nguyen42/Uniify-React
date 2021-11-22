import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DashboardState } from "../../types/State";

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        selectedFunctionality: "favorite",
    } as DashboardState,
    reducers: {
        updateSelectedFunctionality: (state: DashboardState, payload: PayloadAction<string>) => {
            state.selectedFunctionality = payload.payload;
        }
        
    }
});

export const { updateSelectedFunctionality } = dashboardSlice.actions;

export default dashboardSlice.reducer;