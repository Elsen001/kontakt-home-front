import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";
import { OfferItems } from "@/types/types";

export const initialState = {
    productOffer: [] as OfferItems[],
    isLoading: false,
    error: null as string | null,
};

export const getproductOffer = createAsyncThunk("productOffer/getproductOffer", async () => {
    try {
        const response = await axios.get("https://kontakt-back-2.onrender.com/api/products");

        if (response.data && Array.isArray(response.data)) {
            return response.data as OfferItems[];
        } else {
            throw new Error("No offers");
        }
    } catch (error) {
        throw new Error("Failed");
    }
});

const productOfferSlice = createSlice({
    name: "productOffer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getproductOffer.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getproductOffer.fulfilled, (state, action) => {
                state.productOffer = action.payload;
                state.isLoading = false;
            })
            .addCase(getproductOffer.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "error";
            });
    },
});

export const selectproductOffer = (state: RootState) => state.productOffer.productOffer;
export const selectIsLoading = (state: RootState) => state.productOffer.isLoading;
export const selectError = (state: RootState) => state.productOffer.error;

export default productOfferSlice.reducer;
