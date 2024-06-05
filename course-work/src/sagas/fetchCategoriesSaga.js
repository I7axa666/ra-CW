import { takeEvery, put, call } from 'redux-saga/effects';
import { categoriesFetching, categoriesFetchingSuccess, categoriesFetchingError } from '../slice/catalogSlice';
import fetchCategories from '../utilits/fetchCategories';

function* fetchCategoriesWorker() {
    try {
        const data = yield call(fetchCategories);
        yield put(categoriesFetchingSuccess(data));
    } catch (error) {
        yield put(categoriesFetchingError(error.message));
    }
}

export function* watchFetchCategories() {
    yield takeEvery(categoriesFetching.type, fetchCategoriesWorker);
}