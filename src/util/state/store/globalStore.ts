import { configureStore } from "@reduxjs/toolkit";

import explorerReducers from "../slice/explorerSlice";
import adminReducers from "../slice/adminSlice";
import schoolInfoSlice from "../slice/schoolInfoSlice";

const globalStore = configureStore({
    reducer: {
        explorer: explorerReducers,
        admin: adminReducers,
        schoolInfoNavigator: schoolInfoSlice,
    },
});

export type RootState = ReturnType<typeof globalStore.getState>;

export type DispatchState = typeof globalStore.dispatch;

export default globalStore;
