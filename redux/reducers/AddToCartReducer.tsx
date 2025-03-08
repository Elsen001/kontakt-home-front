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
    warrantyAmount: number; // Her ürün için ayrı zəmanət məbləği
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
        addToCart: (state, action: PayloadAction<Omit<CartItem, "qty" | "totalPrice" | "warrantyAmount"> & { warrantyAmount?: number }>) => {
            const newItem = action.payload;
            const exist = state.cart.find(item => item.id === newItem.id);

            if (exist) {
                exist.qty++;
                exist.totalPrice = exist.qty * (Number(newItem.price) + (exist.warrantyAmount || 0));
            } else {
                state.cart.push({
                    ...newItem,
                    qty: 1,
                    totalPrice: Number(newItem.price) + (newItem.warrantyAmount || 0),
                    warrantyAmount: newItem.warrantyAmount || 0
                });
            }

            updateCartTotals(state);
        },

        changeItemCount: (state, action: PayloadAction<{ id: number, change: number }>) => {
            const { id, change } = action.payload;
            const exist = state.cart.find(item => item.id === id);

            if (exist) {
                exist.qty += change;
                if (exist.qty < 1) {
                    state.cart = state.cart.filter(item => item.id !== id);
                } else {
                    exist.totalPrice = exist.qty * (Number(exist.price) + exist.warrantyAmount);
                }
            }

            updateCartTotals(state);
        },

        deleteItems: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            updateCartTotals(state);
        },

        emptyItems: (state) => {
            state.cart = [];
            updateCartTotals(state);
        },

        addWarranty: (state, action: PayloadAction<{ id: number, warrantyAmount: number }>) => {
            const { id, warrantyAmount } = action.payload;
            const item = state.cart.find(item => item.id === id);

            if (item) {
                item.warrantyAmount = warrantyAmount;
                item.totalPrice = item.qty * (Number(item.price) + warrantyAmount);
            }

            updateCartTotals(state);
        }
    }
});

const updateCartTotals = (state: CartState) => {
    state.cartTotal = state.cart.reduce((total, item) => total + (item.qty || 0), 0);
    state.cartTotalPrice = Number(state.cart.reduce((total, item) => total + (Number(item.totalPrice) || 0), 0));
    state.cartTotalDiscount = Number(state.cart.reduce((total, item) => {
        return total + ((Number(item.oldPrice) - Number(item.price)) * (item.qty || 0));
    }, 0));
    state.cartTotalSavings = Number(state.cart.reduce((total, item) => {
        return total + (Number(item.oldPrice) - Number(item.price));
    }, 0));
};

export const { addToCart, changeItemCount, deleteItems, emptyItems, addWarranty } = cartSlice.actions;
export default cartSlice.reducer;