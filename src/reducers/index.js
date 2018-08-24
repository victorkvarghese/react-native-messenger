/* class combines all th existing reducers in the app
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';

export default Object.assign(loginReducer, loadingReducer);
