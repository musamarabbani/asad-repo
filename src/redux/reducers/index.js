import { combineReducers } from 'redux';
import { homeReducer, postsReducer } from './reducers';

const rootReducer = combineReducers({
	homeReducer,
	postsReducer,
});

export default rootReducer;
