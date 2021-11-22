import { configureStore } from "@reduxjs/toolkit";

import explorerReducers from "../slice/explorerSlice";
import adminReducers from "../slice/adminFormSlice";
import schoolInfoReducers from "../slice/schoolInfoSlice";
import adminStateReducers from "../slice/adminStateSlice";
import dashboardReducers from "../slice/dashboardSlice";

const globalStore = configureStore({
    reducer: {
        explorer: explorerReducers,
        admin: adminReducers,
        schoolInfoNavigator: schoolInfoReducers,
        adminState: adminStateReducers,
        dashboardState: dashboardReducers,
    },
});

export type RootState = ReturnType<typeof globalStore.getState>;

export type DispatchState = typeof globalStore.dispatch;

export default globalStore;
