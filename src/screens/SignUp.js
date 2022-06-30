import React from 'react';
import SignupForm from '../components/SignupForm';
import LoginHeader from '../components/LoginHeader';
import { useNavigate } from 'react-router-dom';
import '../assets/css/newstyle.css';

const CoachSignUp = () => {
	const navigate = useNavigate();

	return (
		<div className='main-container'>
			<LoginHeader />
			<div className='login_container '>
				<div className='col-10 col-lg-4 col-md-6 col-xxl-4 content_center'>
					<div className='card login_card d-flex'>
						<span className='login_titleText'>Create Account</span>
						<span className='login_subtitle'>
							Enter below detail to create account
						</span>
						<div className='form_container'>
							<SignupForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoachSignUp;
