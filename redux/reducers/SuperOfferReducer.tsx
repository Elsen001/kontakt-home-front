import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";
import { OfferItems } from "@/types/types";

export const initialState = {
    superOffer: [] as OfferItems[],
    isLoading: false,
    error: null as string | null,
};

export const getSuperOffer = createAsyncThunk("superOffer/getSuperOffer", async () => {
      try {
        const response = await axios.get("https://kontakt-back-2.onrender.com/api/offer");

        if (response.data && Array.isArray(response.data)) {
            return response.data as OfferItems[];
        } else {
            throw new Error("No offers");
        }
    } catch (error) {
        throw new Error("Failed");
    }
     
});

const superOfferSlice = createSlice({
    name: "superOffer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSuperOffer.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getSuperOffer.fulfilled, (state, action) => {
                state.superOffer = action.payload;
                state.isLoading = false;
            })
            .addCase(getSuperOffer.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "error";
            });
    },
});

export const selectSuperOffer = (state: RootState) => state.superOffer.superOffer;
export const selectIsLoading = (state: RootState) => state.superOffer.isLoading;
export const selectError = (state: RootState) => state.superOffer.error;

export default superOfferSlice.reducer;
