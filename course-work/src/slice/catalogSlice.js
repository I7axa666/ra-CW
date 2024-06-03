import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoadinf: false,
    error: null,   
}

const catalogSlice = createSlice({
    name: 'shoseCatalog',
    initialState,
    reducers: {
        productsFetching(state) {
            state.isLoadinf = true;
        },
        productsFetchingSuccess(state, action) {
            state.isLoadinf = false;
            state.products = action.payload;
        },
        productsFetchingError(state, action) {
            state.isLoadinf = false;
            state.error = action.payload;
        },
    }
})

export const { productsFetching, productsFetchingSuccess, productsFetchingError } = catalogSlice.actions;
export default catalogSlice.reducer;