import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";
import { OfferItems } from "@/types/types";

export const initialState = {
    sliderOffer: [] as OfferItems[],
    isLoading: false,
    error: null as string | null,
};

export const getsliderOffer = createAsyncThunk("sliderOffer/getsliderOffer", async () => {
    try {
        const response = await axios.get("https://kontakt-back-2.onrender.com/api/campaign");

        if (response.data && Array.isArray(response.data)) {
            return response.data as OfferItems[];
        } else {
            throw new Error("No offers");
        }
    } catch (error) {
        throw new Error("Failed");
    }
});

const sliderOfferReducer = createSlice({
    name: "sliderOffer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getsliderOffer.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getsliderOffer.fulfilled, (state, action) => {
                state.sliderOffer = action.payload;
                state.isLoading = false;
            })
            .addCase(getsliderOffer.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "error";
            });
    },
});

export const selectSliderOffer = (state: RootState) => state.sliderOffer.sliderOffer;
export const selectIsLoading = (state: RootState) => state.sliderOffer.isLoading;
export const selectError = (state: RootState) => state.sliderOffer.error;

export default sliderOfferReducer.reducer;
