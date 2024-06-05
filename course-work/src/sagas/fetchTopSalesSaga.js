import { takeEvery, put, call } from 'redux-saga/effects';
import { topSalesFetching, topSalesFetchingSuccess, topSalesFetchingError } from '../slice/catalogSlice';
import fetchTopSalesCatalog from '../utilits/fetchTopSalesCatalog';

function* fetchTopSalesWorker() {
    try {
        const data = yield call(fetchTopSalesCatalog);
        yield put(topSalesFetchingSuccess(data));
    } catch (error) {
        yield put(topSalesFetchingError(error.message));
    }
}

export function* watchFetchTopSales() {
    yield takeEvery(topSalesFetching.type, fetchTopSalesWorker);
}