import { all, call, spawn, takeEvery } from 'redux-saga/effects';
import { watchFetchTopSales } from './fetchTopSalesSaga';
import { watchFetchCategories } from './fetchCategoriesSaga';
import { watchFetchCatalog } from './fetchCatalogSaga';
import { watchFetchProductInfo } from './fetchProductInfoSaga';

export default function* rootSaga() {
    yield all([
        watchFetchTopSales(),
        watchFetchCategories(),
        watchFetchCatalog(),
        watchFetchProductInfo()
    ]);
    
    
}
