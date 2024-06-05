import { takeEvery, put, call } from 'redux-saga/effects';
import { productsFetching, productsFetchingSuccess, productsFetchingError } from '../slice/catalogSlice';
import fetchCatalog from '../utilits/fetchCatalog';

function* fetchCatalogWorker() {
    try {
        const data = yield call(fetchCatalog);
        yield put(productsFetchingSuccess(data));
    } catch (error) {
        yield put(productsFetchingError(error.message));
    }
}

export function* watchFetchCatalog() {
    yield takeEvery(productsFetching.type, fetchCatalogWorker);
}