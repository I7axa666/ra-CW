const viewProductCategoryReducer = {
    changeCategory(state, action) {
        state.viewProductCategory = action.payload;
    },
};

export default viewProductCategoryReducer;