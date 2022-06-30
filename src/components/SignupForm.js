import React, { useEffect, useState } from 'react';
import '../../assets/css/loginform.css';
import EmailField from './loginfields/EmailField';
import PasswField from './loginfields/PasswField';
import { useNavigate } from 'react-router-dom';
import ConfirmPasswField from './loginfields/ConfirmPasswField';
import { Spinner } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FullName } from './loginfields/FullName';
import 'react-toastify/dist/ReactToastify.css';
import { showToast } from '../../notify/ShowToast';

const SignupForm = (props) => {
	const navigate = useNavigate();
	const initialValues = { name: '', email: '', password: '', confirmPass: '' };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [select, setSelect] = useState(true);
	const [isbtnDisable, setbtnDisable] = useState(false);
	const [isbtnBorderPass, setbtnBorderPass] = useState(false);
	const [isbtnBorderEmail, setbtnBorderEmail] = useState(false);
	const [isbtnBorderConfirmPass, setbtnBorderConfirmPass] = useState(false);
	const [isbtnBordername, setbtnBordername] = useState(false);
	const [isAtuoFocus, setAutoFocus] = useState(true);
	const [isSignupbtnLabel, setSignupbtnLabel] = useState(true);
	const [isSpinner, setSpinner] = useState(true);

	const handleChange = (event) => {
		// console.log(event.target)
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
		console.log(formValues);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.preventDefault());
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};
	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
			// setbtnDisable(true)
			onSuccessSubmit();
			// setSignupbtnLabel(false)
		} else {
			showToast('error', 'Input fileds data are missing.');
		}
	}, [formErrors]);
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.email) {
			errors.email = 'Email is required!';
			setbtnBorderEmail(true);
		} else if (!regex.test(values.email)) {
			errors.email = 'This is not Valid Email';
			setbtnBorderEmail(true);
		} else {
			setbtnBorderEmail(false);
		}
		if (!values.name) {
			errors.name = 'Full Name is required!';
			setbtnBordername(true);
		} else {
			setbtnBordername(false);
		}
		if (!values.password) {
			errors.password = 'Password is required';
			setbtnBorderPass(true);
		} else if (values.password.length < 4) {
			errors.password = 'Password must be be more than five characters';
			setbtnBorderPass(true);
		} else if (values.password.length > 12) {
			errors.password = 'Password cannot exeeds twleve characters';
			setbtnBorderPass(true);
		} else {
			setbtnBorderPass(false);
		}
		if (!values.confirmPass) {
			errors.confirmPass = 'Password is required';
			setbtnBorderConfirmPass(true);
		} else if (values.confirmPass.length < 4) {
			errors.confirmPass = 'Password must be be more than five characters';
			setbtnBorderConfirmPass(true);
		} else if (values.confirmPass.length > 12) {
			errors.confirmPass = 'Password cannot exeeds twleve characters';
			setbtnBorderConfirmPass(true);
		} else if (values.password !== values.confirmPass) {
			errors.confirmPass = "Password doesn't match";
			setbtnBorderConfirmPass(true);
			setbtnBorderPass(true);
		} else {
			setbtnBorderConfirmPass(false);
		}
		return errors;
	};
	const active = (value) => {
		setSelect(value);
	};
	const onSuccessSubmit = () => {
		setSpinner(false);
		showToast('success', 'Registered Succesfully ');
		console.log(formValues.name, formValues.email, formValues.password);
	};

	return (
		<form autocomplete='off'>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			<FullName
				handleChange={handleChange}
				formValues={formValues}
				select={select}
				active={active}
				isbtnBordername={isbtnBordername}
				isAtuoFocus={isAtuoFocus}
			/>
			<span className='loginfeild_error_txt' style={{ marginTop: '4px' }}>
				{formErrors.name}
			</span>
			<div style={{ marginTop: '16px' }}></div>
			<EmailField
				handleChange={handleChange}
				formValues={formValues}
				select={select}
				active={active}
				isbtnBorderEmail={isbtnBorderEmail}
				// isAtuoFocus={!isAtuoFocus}
			/>
			<span className='loginfeild_error_txt' style={{ marginTop: '4px' }}>
				{formErrors.email}
			</span>
			<PasswField
				handleChange={handleChange}
				formValues={formValues}
				select={select}
				active={active}
				passLabel='Password'
				formErrors={formErrors}
				isbtnBorderPass={isbtnBorderPass}
			/>
			<span className='loginfeild_error_txt'> {formErrors.password}</span>
			<ConfirmPasswField
				handleChange={handleChange}
				formValues={formValues}
				select={select}
				active={active}
				passLabel='Confirm password'
				formErrors={formErrors}
				isbtnBorderConfirmPass={isbtnBorderConfirmPass}
			/>
			<span className='loginfeild_error_txt'> {formErrors.confirmPass}</span>
			<button
				type='button'
				className='btn_gradient'
				onClick={(event) => handleSubmit(event)}
				disabled={isbtnDisable}
			>
				{isSignupbtnLabel == true ? (
					'Signup'
				) : //<ToastContainer />

				isSpinner == true ? (
					<Spinner size='sm' />
				) : (
					''
				)}
			</button>
		</form>
	);
};

export default SignupForm;
