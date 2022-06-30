import React from 'react';
import {
	Routes,
	Route,
	HashRouter,
	BrowserRouter as Router,
} from 'react-router-dom';
import './assets/css/combine.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CoachSignUp from './screens/SignUp';

const App = () => {
	return (
		<>
			<Routes>
				<Route exact path='/' element={<CoachSignUp />}></Route>
			</Routes>
		</>
	);
};

export default App;
