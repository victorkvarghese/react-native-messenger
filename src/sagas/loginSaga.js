/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put } from 'redux-saga/effects';

// import * as loginActions from '@actions/loginActions';

//selector Function used to access reducer states
export const getNetworkState = state => {
    return {
        isConnected: state.network.isConnected
    };
};

// Our worker Saga that logins the user
export default function* loginAsync() {
    //yield put(loginActions.enableLoader());
}
