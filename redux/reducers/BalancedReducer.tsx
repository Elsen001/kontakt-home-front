import { Features } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    name: string;
    description: string;
    image: any;
    brand: string;
    price: number;
    oldPrice: number;
    model: string;
    color: string;
    category: string;
    discount: number;
    features?: Features;    
}

interface CartState {
    balanced: CartItem[];
    balanceTotal: number;
}

const initialState: CartState = {
    balanced: [],
    balanceTotal: 0,
};

const balanceSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        deleteBalanced: (state, action: PayloadAction<number>) => {
            state.balanced = state.balanced.filter(item => item.id !== action.payload);
            state.balanceTotal = state.balanced.length; 
        },
        addToBalanced: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.balanced.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.balanced.push(action.payload);
                state.balanceTotal = state.balanced.length;
            }
        },
        cleanBalanced : (state)=>{
            state.balanced = [];
        }
        
    }
});

export const { addToBalanced, deleteBalanced,cleanBalanced } = balanceSlice.actions;
export default balanceSlice.reducer;