import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    viewProductCategory: null,
    topSales: [],
    categories: [],
    isLoadingProducts: false,
    isLoadingCategories: false,
    isLoading: false,
    errorProducts: null,
    error: null,
    errorCategories: null,   
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
        categoriesFetching(state) {
            state.isLoadingCategories = true;
            state.errorCategories = null;
        },
        categoriesFetchingSuccess(state, action) {
            state.isLoadingCategories = false;
            state.categories = action.payload;
        },
        categoriesFetchingError(state, action) {
            state.isLoadingCategories = false;
            state.errorCategories = action.payload;
        },
        productsFetching(state) {
            state.isLoadingProducts = true;
            state.errorProducts = null;
        },
        productsFetchingSuccess(state, action) {
            state.isLoadingProducts = false;
            state.products = action.payload;
        },
        productsFetchingError(state, action) {
            state.isLoadingProducts = false;
            state.errorProducts = action.payload;
        },
        changeCategory(state, action) {
            state.viewProductCategory = action.payload;
        },
    }
})

export const { 
    topSalesFetching, topSalesFetchingSuccess, topSalesFetchingError,
    categoriesFetching, categoriesFetchingSuccess, categoriesFetchingError,
    productsFetching, productsFetchingSuccess, productsFetchingError,
    changeCategory, 
} = catalogSlice.actions;

export default catalogSlice.reducer;
