import { configureStore } from "@reduxjs/toolkit";

import explorerReducers from "../slice/explorerSlice";
import adminReducers from "../slice/adminSlice";

const globalStore = configureStore({
    reducer: {
        explorer: explorerReducers,
        admin: adminReducers,
    },
});

export type RootState = ReturnType<typeof globalStore.getState>;

export type DispatchState = typeof globalStore.dispatch;

export default globalStore;
