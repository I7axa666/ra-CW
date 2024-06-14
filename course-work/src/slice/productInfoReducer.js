const productInfoReducer = {
    productInfoFetching(state) {
        state.isLoadingProductInfo = true;
        state.errorProductInfo = null;
        
    },
    productInfoFetchingSuccess(state, action) {
        state.isLoadingProductInfo = false;
        state.productInfo = action.payload;
               
    },
    productInfoFetchingError(state, action) {
        state.isLoadingProductInfo = false;
        state.errorProductInfo = action.payload;
    },

};

export default productInfoReducer;
