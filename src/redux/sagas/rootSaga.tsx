import * as ACTION from 'src/constants/constants';
import { takeLatest } from 'redux-saga/effects';
import authSaga from './authSaga';
import articleSaga from './articlesSaga';
import talesArticlesSaga from './talesArticlesSaga';
import talesCollectionsSaga from './talesCollectionsSaga';

function* rootSaga() {
    yield takeLatest([
        ACTION.SIGNIN,
        ACTION.SIGNOUT,
        ACTION.SIGNIN_WITH_GOOGLE,
        ACTION.ON_AUTHSTATE_CHANGED,
        ACTION.ON_AUTHSTATE_SUCCESS,
        ACTION.ON_AUTHSTATE_FAIL,
        ACTION.SET_AUTH_PERSISTENCE,
    ], authSaga);

    yield takeLatest([
        ACTION.ADD_ARTICLE,
        ACTION.REMOVE_ARTICLE,
        ACTION.EDIT_ARTICLE,
        ACTION.GET_ARTICLES
    ], articleSaga);

    yield takeLatest([
        ACTION.ADD_TALES_ARTICLE,
        ACTION.REMOVE_TALES_ARTICLE,
        ACTION.EDIT_TALES_ARTICLE,
        ACTION.GET_TALES_ARTICLES
    ], talesArticlesSaga);

    yield takeLatest([
        ACTION.ADD_TALES_COLLECTION,
        ACTION.REMOVE_TALES_COLLECTION,
        ACTION.EDIT_TALES_COLLECTION,
        ACTION.GET_TALES_COLLECTIONS
    ], talesCollectionsSaga);
}

export default rootSaga;