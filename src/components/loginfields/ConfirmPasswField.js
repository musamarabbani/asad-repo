import React, { useState } from 'react';
import { Iconlock, IconEye } from '../../assets/images/svg';
const ConfirmPasswField = (props) => {
	const [passwordType, setPasswordType] = useState('password');
	const togglePassword = () => {
		if (passwordType === 'password') {
			setPasswordType('text');
			return;
		}
		setPasswordType('password');
	};
	return (
		<div style={{ marginTop: 8 }}>
			<label for='exampleFormControlInput1' className='form-label'>
				{props.passLabel}
			</label>
			<div className='icon_inputfield'>
				<Iconlock className='icon_position' />
				<input
					type={passwordType}
					name='confirmPass'
					className={
						'login_inputfeild_txt login_activeinputfeild_text loginfeild_control ' +
						(props.isbtnBorderConfirmPass == false
							? props.select == '4'
								? 'login_activeinputfeild_text loginfeild_control_gradient_border'
								: ' '
							: props.select == '4'
							? 'login_activeinputfeild_text red_border'
							: 'red_border')
					}
					placeholder='Enter your password'
					value={props.formValues.confirmPass}
					onChange={props.handleChange}
					onClick={() => props.active('4')}
					style={{ paddingRight: '45px ' }}
				/>
				<span
					style={{ display: 'flex', alignItems: 'center' }}
					onClick={togglePassword}
				>
					{passwordType === 'password' ? (
						<IconEye
							className='iconeye_position  '
							style={{ marginTop: '2px' }}
						/>
					) : (
						<img
							className='iconeye_position'
							src='Images/Img_eyeOpen.png'
							style={{ width: '20px', height: '20px', marginTop: '2px' }}
						/>
					)}
				</span>
			</div>
		</div>
	);
};

export default ConfirmPasswField;
