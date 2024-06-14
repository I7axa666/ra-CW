import { takeEvery, put, call } from 'redux-saga/effects';
import { productInfoFetching, productInfoFetchingSuccess, productInfoFetchingError } from '../slice/catalogSlice';
import fetchProductInfo from '../utilits/fetchProductInfo';

function* fetchProductInfoWorker(action) {
    try {
        const { productId } = action.payload;
        const data = yield call(fetchProductInfo, productId);
        yield put(productInfoFetchingSuccess(data));
    } catch (error) {
        yield put(productInfoFetchingError(error.message));
    }
}

export function* watchFetchProductInfo() {
    yield takeEvery(productInfoFetching.type, fetchProductInfoWorker);
}
