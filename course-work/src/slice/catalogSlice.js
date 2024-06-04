import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    topSales: [],
    isLoading: false,
    error: null,   
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        topSalesFetching(state) {
            state.isLoading = true;
            state.error = null;
        },
        topSalesFetchingSuccess(state, action) {
            state.isLoading = false;
            state.topSales = action.payload;
        },
        topSalesFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const { topSalesFetching, topSalesFetchingSuccess, topSalesFetchingError } = catalogSlice.actions;
export default catalogSlice.reducer;
