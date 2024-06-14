import { createSlice } from "@reduxjs/toolkit";
import topSalesReducer from './topSalesReducer';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import viewProductCategoryReducer from './viewProductCategoryReducer';
import offsetChangeReducer from './offsetChangeReducer';
import productInfoReducer from "./productInfoReducer";

const initialState = {
    products: [],
    productId: 0,
    productsCatalog: [],
    productSearch: "",
    productInfo: {},
    viewProductCategory: 0,
    offset: 0,
    topSales: [],
    categories: [],
    isLoadingProducts: false,
    isLoadingProductInfo: false,
    isLoadingCategories: false,
    isLoading: false,
    errorProducts: null,
    errorProductInfo: null,
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
        ...productInfoReducer,
    },
    
})

export const { 
    topSalesFetching, topSalesFetchingSuccess, topSalesFetchingError,
    categoriesFetching, categoriesFetchingSuccess, categoriesFetchingError,
    productsFetching, productsFetchingSuccess, productsFetchingError,
    changeCategory, changeOffset, clearProducts, searchProduct,
    productInfoFetching, productInfoFetchingSuccess, productInfoFetchingError,
} = catalogSlice.actions;

export default catalogSlice.reducer;
