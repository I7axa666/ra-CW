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

        console.log(uniqueProducts)

        state.productsCatalog = uniqueProducts;
        console.log(state.productsCatalog)
    },
    productsFetchingError(state, action) {
        state.isLoadingProducts = false;
        state.errorProducts = action.payload;
    },
};

export default productsReducer;
