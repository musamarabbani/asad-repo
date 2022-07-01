import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { store } from './redux/stores';
import { Provider } from 'react-redux';
import PostPage from './screens/PostsPage';
import './assets/css/combine.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import CoachSignUp from './screens/SignUp';

const App = () => {
	return (
		<>
			<Provider store={store}>
				<Routes>
					<Route exact path='/' element={<CoachSignUp />} />
					<Route exact path='/posts' element={<PostPage />} />
				</Routes>
			</Provider>
		</>
	);
};

export default App;
