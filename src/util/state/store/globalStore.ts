import { configureStore } from "@reduxjs/toolkit";

import explorerReducers from "../slice/explorerSlice";

const globalStore = configureStore({
	reducer: {
        explorer: explorerReducers,
    },
});

export type RootState = ReturnType<typeof globalStore.getState>;

export type DispatchState = typeof globalStore.dispatch;

export default globalStore;
