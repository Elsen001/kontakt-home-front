import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";
import { DataItems } from "@/types/types";

export const initialState = {
  categoryItems: [] as DataItems[],  
  isLoading: false,
  error: null as string | null,
};

export const getCategoryItems = createAsyncThunk("categoryItems/getCategoryItems", async () => {
  const url = "https://kontakt-back-2.onrender.com/api/categories";  
  const options = {
    method: "GET",
  };

  try {
    const response = await axios.get(url, options);
    return response.data.data[0].data as DataItems[];  
  } catch (error) {
    throw new Error("Failed");
  }
});

const categorySlice = createSlice({
  name: "categoryItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategoryItems.fulfilled, (state, action) => {
        state.categoryItems = action.payload;  
        state.isLoading = false;
      })
      .addCase(getCategoryItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "error";
      });
  },
});

export const selectCategoryItems = (state: RootState) => state.categoryItems.categoryItems;
export const selectIsLoading = (state: RootState) => state.categoryItems.isLoading;
export const selectError = (state: RootState) => state.categoryItems.error;

export default categorySlice.reducer;
