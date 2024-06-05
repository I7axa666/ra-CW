import { all } from 'redux-saga/effects';
import { watchFetchTopSales } from './fetchTopSalesSaga';
import { watchFetchCategories } from './fetchCategoriesSaga';
import { watchFetchCatalog } from './fetchCatalogSaga';

export default function* rootSaga() {
    yield all([
        watchFetchTopSales(),
        watchFetchCategories(),
        watchFetchCatalog(),
    ]);
}