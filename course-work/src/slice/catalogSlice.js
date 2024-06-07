import { createSlice } from "@reduxjs/toolkit";
import topSalesReducer from './topSalesReducer';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import viewProductCategoryReducer from './viewProductCategoryReducer';
import offsetChangeReducer from './offsetChangeReducer';

const initialState = {
    products: [],
    productsCatalog: [],
    viewProductCategory: 0,
    offset: 0,
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
        ...offsetChangeReducer,
    },
    
})

export const { 
    topSalesFetching, topSalesFetchingSuccess, topSalesFetchingError,
    categoriesFetching, categoriesFetchingSuccess, categoriesFetchingError,
    productsFetching, productsFetchingSuccess, productsFetchingError,
    changeCategory, changeOffset, clearProducts
} = catalogSlice.actions;

export default catalogSlice.reducer;
