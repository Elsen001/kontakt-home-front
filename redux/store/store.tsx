import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../reducers/CategoryReducer";
import ProductOfferReducer from "../reducers/ProductOfferReducer";
import AddToCartReducer from "../reducers/AddToCartReducer";
import SuperOfferReducer from "../reducers/SuperOfferReducer";
import detailReducer from "../reducers/DetailsReducer";
import sliderOfferReducer from "../reducers/SliderReducer";
import tvReducer from "../reducers/TvReducer";
import balancedReducer from "../reducers/BalancedReducer";


export const store = configureStore({
    reducer: {
        categoryItems:CategoryReducer,
        productOffer:ProductOfferReducer,
        cart:AddToCartReducer,
        balanced:balancedReducer,
        superOffer:SuperOfferReducer,
        details: detailReducer,
        sliderOffer:sliderOfferReducer,
        tv:tvReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;