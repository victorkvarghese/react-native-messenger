/* Redux saga class init
 * Called on app init on Entrypoint
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import loginSaga from './loginSaga';

export default function* watch() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
}
