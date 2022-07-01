import {
	ADD_POST_DATA,
	FETCH_POST_DATA,
	SUBMIT_HOME_DATA,
} from '../actions/Types';

const initialValues = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const initialPosts = {
	posts: [],
};

export const homeReducer = (state = initialValues, action) => {
	switch (action.type) {
		case SUBMIT_HOME_DATA:
			return { ...initialValues, ...action.payload };
		default:
			return state;
	}
};

export const postsReducer = (state = initialPosts.posts, action) => {
	switch (action.type) {
		case FETCH_POST_DATA:
			return action.payload || [];
		case ADD_POST_DATA:
			return [...state, ...action.payload];
		default:
			return state;
	}
};
