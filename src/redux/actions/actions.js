import { SUBMIT_HOME_DATA } from './Types';

export const homePageAction = (data) => {
	console.log('data inside action', SUBMIT_HOME_DATA, data, SUBMIT_HOME_DATA);
	return {
		type: SUBMIT_HOME_DATA,
		payload: data,
	};
};
