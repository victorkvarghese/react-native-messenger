/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'src/lib/createReducer';
import * as actionTypes from 'src/actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

export const loginReducer = createReducer(initialState, {
    [actionTypes.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            password: action.password
        };
    },
    [actionTypes.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [actionTypes.LOGIN_RESPONSE](state) {
        return {
            ...state
        };
    },
    [actionTypes.LOGIN_FAILED](state) {
        return {
            ...state,
            isLoggedIn: false
        };
    }
});
