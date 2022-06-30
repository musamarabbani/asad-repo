import { combineReducers } from 'redux';
import { homeReducer } from './reducers';

const rootReducer = combineReducers({
	homeReducer,
});

export default rootReducer;
