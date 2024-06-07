const topSalesReducer = {
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
};

export default topSalesReducer;