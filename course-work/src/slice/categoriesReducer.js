const categoriesReducer = {
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
};

export default categoriesReducer;