// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { applyMiddleware, compose, createStore } from 'redux';

// ** init middleware
const middleware = [thunk];

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ** Create store
const store = createStore(
	rootReducer,
	{},
	composeEnhancers(applyMiddleware(...middleware))
);

export { store };
