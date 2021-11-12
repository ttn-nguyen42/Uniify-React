import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShortPreviewSchema } from "../../schema/DatabaseSchema";

import { AdminState } from "../../types/State";

const adminStateSlice = createSlice({
    name: "adminStateSlice",
    initialState: {
        feature: "featured",
        currentSelectionFeatured: [],
        currentSelectionForYou: [],
        currentSelectionInternational: [],
        currentSelectionAssociate: [],
    } as AdminState,
    reducers: {
        updateCurrentFeature: (
            state: AdminState,
            payload: PayloadAction<string>
        ) => {
            state.feature = payload.payload;
        },
        addCurrentSelection: (
            state: AdminState,
            payload: PayloadAction<{
                payload: ShortPreviewSchema;
                type: string;
            }>
        ) => {
            if (payload.payload.type === "featured") {
                const alreadyExist = state.currentSelectionFeatured.find(
                    (selection: ShortPreviewSchema) =>
                        payload.payload.payload.id === selection.id
                );

                if (alreadyExist === undefined) {
                    state.currentSelectionFeatured.push(
                        payload.payload.payload
                    );
                }
            }

            if (payload.payload.type === "for-you") {
                const alreadyExist = state.currentSelectionForYou.find(
                    (selection: ShortPreviewSchema) =>
                        payload.payload.payload.id === selection.id
                );

                if (alreadyExist === undefined) {
                    state.currentSelectionForYou.push(payload.payload.payload);
                }
            }

            if (payload.payload.type === "international") {
                const alreadyExist = state.currentSelectionInternational.find(
                    (selection: ShortPreviewSchema) =>
                        payload.payload.payload.id === selection.id
                );

                if (alreadyExist === undefined) {
                    state.currentSelectionInternational.push(
                        payload.payload.payload
                    );
                }
            }

            if (payload.payload.type === "associate") {
                const alreadyExist = state.currentSelectionAssociate.find(
                    (selection: ShortPreviewSchema) =>
                        payload.payload.payload.id === selection.id
                );

                if (alreadyExist === undefined) {
                    state.currentSelectionAssociate.push(
                        payload.payload.payload
                    );
                }
            }
        },
        removeCurrentSelection: (
            state: AdminState,
            payload: PayloadAction<{
                payload: ShortPreviewSchema;
                type: string;
            }>
        ) => {
            if (payload.payload.type === "featured") {
                state.currentSelectionFeatured =
                    state.currentSelectionFeatured.filter(
                        (item: ShortPreviewSchema) =>
                            item.id !== payload.payload.payload.id
                    );
            }

            if (payload.payload.type === "for-you") {
                state.currentSelectionForYou =
                    state.currentSelectionForYou.filter(
                        (item: ShortPreviewSchema) =>
                            item.id !== payload.payload.payload.id
                    );
            }

            if (payload.payload.type === "international") {
                state.currentSelectionInternational =
                    state.currentSelectionInternational.filter(
                        (item: ShortPreviewSchema) =>
                            item.id !== payload.payload.payload.id
                    );
            }

            if (payload.payload.type === "associate") {
                state.currentSelectionAssociate =
                    state.currentSelectionAssociate.filter(
                        (item: ShortPreviewSchema) =>
                            item.id !== payload.payload.payload.id
                    );
            }
        },
        resetCurrentSelection: (
            state: AdminState,
            payload: PayloadAction<{
                type: string;
            }>
        ) => {
            if (payload.payload.type === "featured") {
                state.currentSelectionFeatured = [];
            }

            if (payload.payload.type === "for-you") {
                state.currentSelectionForYou = [];
            }

            if (payload.payload.type === "international") {
                state.currentSelectionInternational = [];
            }

            if (payload.payload.type === "associate") {
                state.currentSelectionAssociate = [];
            }
        },
        setCurrentSelection: (
            state: AdminState,
            payload: PayloadAction<{
                type: string;
                payload: ShortPreviewSchema[];
            }>
        ) => {
            if (payload.payload.type === "featured") {
                state.currentSelectionFeatured = payload.payload.payload;
            }

            if (payload.payload.type === "for-you") {
                state.currentSelectionForYou = payload.payload.payload;
            }

            if (payload.payload.type === "international") {
                state.currentSelectionInternational = payload.payload.payload;
            }

            if (payload.payload.type === "associate") {
                state.currentSelectionAssociate = payload.payload.payload;
            }
        },
    },
});

export const {
    updateCurrentFeature,
    addCurrentSelection,
    removeCurrentSelection,
    resetCurrentSelection,
    setCurrentSelection,
} = adminStateSlice.actions;

export default adminStateSlice.reducer;
