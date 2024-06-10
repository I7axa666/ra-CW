const productsReducer = {
    productsFetching(state) {
        state.isLoadingProducts = true;
        state.errorProducts = null;
    },
    productsFetchingSuccess(state, action) {
        state.isLoadingProducts = false;
        state.products = action.payload;
        const productsList = state.productsCatalog.concat(state.products);
        
        const uniqueProducts = productsList.reduce((acc, current) => {
            const x = acc.find(item => item.id === current.id);
            if (!x) {
                acc.push(current);
            } 
            return acc;
            
        }, []);
        if (state.viewProductCategory) {
            state.productsCatalog = uniqueProducts.filter(product => product.category === state.viewProductCategory);
        } else {
            state.productsCatalog = uniqueProducts;
        }
        
    },
    productsFetchingError(state, action) {
        state.isLoadingProducts = false;
        state.errorProducts = action.payload;
    },
    clearProducts(state) {
        state.products = [];
        state.productsCatalog = [];
    },
    searchProduct(state, action) {
        state.productSearch = action.payload;
    }

};

export default productsReducer;
