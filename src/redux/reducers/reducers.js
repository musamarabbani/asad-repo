import { SUBMIT_HOME_DATA } from '../actions/Types';

const initialValues = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

export const homeReducer = (state = initialValues, action) => {
	switch (action.type) {
		case SUBMIT_HOME_DATA:
			return { ...initialValues, ...action.payload };
		default:
			return state;
	}
};
