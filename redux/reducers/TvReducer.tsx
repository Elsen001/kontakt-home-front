import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";
import { OfferItems } from "@/types/types";

export const initialState = {
    tv: [] as OfferItems[],
    isLoading: false,
    error: null as string | null,
};

export const getTvOffer = createAsyncThunk("tv/getTvOffer", async () => {
      try {
        const response = await axios.get("https://kontakt-back-2.onrender.com/api/tv");

        if (response.data && Array.isArray(response.data)) {
            console.log("Gələn məhsul təklifləri:", response.data);
            return response.data as OfferItems[];
        } else {
            throw new Error("No offers found in response");
        }
    } catch (error) {
        throw new Error("Failed to fetch product offers");
    }
     
});

const superOfferSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTvOffer.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getTvOffer.fulfilled, (state, action) => {
                console.log(action.payload)
                state.tv = action.payload;
                state.isLoading = false;
            })
            .addCase(getTvOffer.rejected, (state, action) => {
                console.log(action.error)

                state.isLoading = false;
                state.error = action.error.message || "An error occurred";
            });
    },
});

export const selectTvOffer = (state: RootState) => state.tv.tv;
export const selectIsLoading = (state: RootState) => state.tv.isLoading;
export const selectError = (state: RootState) => state.tv.error;

export default superOfferSlice.reducer;
