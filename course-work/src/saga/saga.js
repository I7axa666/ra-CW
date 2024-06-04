import { topSalesFetching, topSalesFetchingSuccess, topSalesFetchingError } from '../slice/catalogSlice';
import { takeEvery, put, call } from 'redux-saga/effects';
import fetchTopSalesCatalog from '../utilits/fetchTopSalesCatalog';

export function * workerSaga() {

    try {
        const data = yield call(fetchTopSalesCatalog);
        
        yield put(topSalesFetchingSuccess(data));
    } catch (error) {  
        yield put(topSalesFetchingError(error.message));
    }
  
}

export function* watchClickSaga() {

    yield takeEvery(topSalesFetching.type, workerSaga);
}
export default function* rootSaga() {
    
    yield watchClickSaga();
}
