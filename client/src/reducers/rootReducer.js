import { combineReducers } from 'redux';
import auth from './reducers_auth';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
