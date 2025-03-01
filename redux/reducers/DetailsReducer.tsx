import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";
import { OfferItems } from "@/types/types";



interface DetailState {
  details: OfferItems;
  isLoading: boolean;
  error: string | null;
}

const initialState: DetailState = {
  details: {} as OfferItems,
  isLoading: false,
  error: null,
};

export const getItemById = createAsyncThunk<OfferItems, { id: string }>(
  "details/getItemById",
  async ({ id }) => {
    try {
      const response = await axios.get<OfferItems>(`https://kontakt-back-2.onrender.com/api/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Məlumat yüklənmədi");
    }
  }
);

const detailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItemById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getItemById.fulfilled, (state, action) => {
        state.details = action.payload;
        state.isLoading = false;
      })
      .addCase(getItemById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Xəta baş verdi";
      });
  },
});

export const selectItem = (state: RootState)  => state.details.details;
export const selectIsLoading = (state: RootState) => state.details.isLoading;
export const selectError = (state: RootState) => state.details.error;

export default detailSlice.reducer;
