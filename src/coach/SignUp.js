import React from 'react';
import '../assets/css/newstyle.css';
import SignupForm from '../components/SignupForm';
import LoginHeader from '../components/LoginHeader';
import { useNavigate } from 'react-router-dom';
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

						<span className='direct_login direct_logintxt'>
							Already have an Account?
							<a
								className=' forgot  '
								onClick={() => navigate('/')}
								style={{ textDecoration: 'none', cursor: 'pointer' }}
							>
								&nbsp;Login
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoachSignUp;
