import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/saga";
import catalogReducer from "../slice/catalogSlice";


const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    catalog: catalogReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store
