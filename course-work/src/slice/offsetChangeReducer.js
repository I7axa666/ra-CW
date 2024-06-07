const offsetChangeReducer = {
    changeOffset(state, action) {

        state.offset = action.payload;
    },
};

export default offsetChangeReducer;
