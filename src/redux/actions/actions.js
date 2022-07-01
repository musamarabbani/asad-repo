import { ADD_POST_DATA, FETCH_POST_DATA, SUBMIT_HOME_DATA } from './Types';
import axios from 'axios';

export const homePageAction = (data) => {
	console.log('data inside action', SUBMIT_HOME_DATA, data, SUBMIT_HOME_DATA);
	return {
		type: SUBMIT_HOME_DATA,
		payload: data,
	};
};

export const fetchPostData = () => async (dispatch) => {
	try {
		const resutl = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		if (resutl && resutl.status === 200) {
			console.log('resutl', resutl.data);
			dispatch({
				type: FETCH_POST_DATA,
				payload: resutl.data,
			});
		} else {
			throw new Error('Something went wrong');
		}
	} catch (err) {
		dispatch({
			type: FETCH_POST_DATA,
			payload: [],
		});
	}
};

export const addPostData = (data) => (dispatch, getReducer) => {
	const reducersData = getReducer();
	console.log('reducersData', reducersData);
	console.log('data', data);
	const posts = reducersData.postsReducer;
	data = {
		id: posts[posts.length - 1].id + 1,
		userId: data.userId,
		title: data.postTitle,
	};

	const postData = [...posts, data];
	console.log('data', postData);
	return {
		type: ADD_POST_DATA,
		payload: postData,
	};
};
