import { createSlice } from "@reduxjs/toolkit";
import topSalesReducer from './topSalesReducer';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import viewProductCategoryReducer from './viewProductCategoryReducer';

const initialState = {
    products: [],
    productsCatalog: [],
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
        ...topSalesReducer,
        ...categoriesReducer,
        ...productsReducer,
        ...viewProductCategoryReducer,
    },
    
})

export const { 
    topSalesFetching, topSalesFetchingSuccess, topSalesFetchingError,
    categoriesFetching, categoriesFetchingSuccess, categoriesFetchingError,
    productsFetching, productsFetchingSuccess, productsFetchingError,
    changeCategory, 
} = catalogSlice.actions;

export default catalogSlice.reducer;
