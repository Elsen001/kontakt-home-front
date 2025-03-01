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
    qty: number;
    totalPrice: number;
}

interface CartState {
    cart: CartItem[];
    cartTotal: number;         
    cartTotalPrice: number;    
    cartTotalDiscount: number; 
    cartTotalSavings: number;  
}

const initialState: CartState = {
    cart: [],
    cartTotal: 0,
    cartTotalPrice: 0,
    cartTotalDiscount: 0,
    cartTotalSavings: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Omit<CartItem, "qty" | "totalPrice">>) => {
            const newItem = action.payload;
            const exist = state.cart.find(item => item.id === newItem.id);

            if (exist) {
                exist.qty++;
                exist.totalPrice = exist.qty * Number(newItem.price);
            } else {
                state.cart.push({
                    ...newItem,
                    qty: 1,
                    totalPrice: Number(newItem.price)
                });
            }

            state.cartTotal = state.cart.reduce((total, item) => total + (item.qty || 0), 0);
            state.cartTotalPrice = Number(state.cart.reduce((total, item) => total + (Number(item.totalPrice) || 0), 0));
            state.cartTotalDiscount = Number(state.cart.reduce((total, item) => {
                return total + ((Number(item.oldPrice) - Number(item.price)) * (item.qty || 0));
            }, 0));
            state.cartTotalSavings = Number(state.cart.reduce((total, item) => {
                return total + (Number(item.oldPrice) - Number(item.price));
            }, 0));
        },

        changeItemCount: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const exist = state.cart.find(item => item.id === id);

            if (exist) {
                if (exist.qty === 1) {
                    state.cart = state.cart.filter(item => item.id !== id);
                } else {
                    exist.qty--;
                    exist.totalPrice = exist.qty * Number(exist.price);
                }
            }

            state.cartTotal = state.cart.reduce((total, item) => total + (item.qty || 0), 0);
            state.cartTotalPrice = Number(state.cart.reduce((total, item) => total + (Number(item.totalPrice) || 0), 0));
            state.cartTotalDiscount = Number(state.cart.reduce((total, item) => {
                return total + ((Number(item.oldPrice) - Number(item.price)) * (item.qty || 0));
            }, 0));
            state.cartTotalSavings = Number(state.cart.reduce((total, item) => {
                return total + (Number(item.oldPrice) - Number(item.price));
            }, 0));
        },

        deleteItems: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);

            state.cartTotal = state.cart.reduce((total, item) => total + (item.qty || 0), 0);
            state.cartTotalPrice = Number(state.cart.reduce((total, item) => total + (Number(item.totalPrice) || 0), 0));
            state.cartTotalDiscount = Number(state.cart.reduce((total, item) => {
                return total + ((Number(item.oldPrice) - Number(item.price)) * (item.qty || 0));
            }, 0));
            state.cartTotalSavings = Number(state.cart.reduce((total, item) => {
                return total + (Number(item.oldPrice) - Number(item.price));
            }, 0));
        },
    }
});

export const { addToCart, changeItemCount, deleteItems } = cartSlice.actions;
export default cartSlice.reducer;