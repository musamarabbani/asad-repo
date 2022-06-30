import React, { useState } from 'react';
import { Iconlock, IconEye } from '../../assets/images/svg';

const PasswField = (props) => {
	const [passwordType, setPasswordType] = useState('password');
	const togglePassword = () => {
		if (passwordType === 'password') {
			setPasswordType('text');
			return;
		}
		setPasswordType('password');
	};
	return (
		<div style={{ marginTop: 16 }}>
			<label for='exampleFormControlInput1' className='form-label'>
				{props.passLabel}
			</label>
			<div className='icon_inputfield'>
				<Iconlock className='icon_position Iconlock_color'>
					<path fill='#fff' />
				</Iconlock>
				<input
					type={passwordType}
					name='password'
					autoFocus={props.isautoFocus}
					className={
						'login_inputfeild_txt login_activeinputfeild_text loginfeild_control ' +
						(props.isbtnBorderPass == false
							? props.select == '3' || props.isautoFocus == true
								? 'login_activeinputfeild_text loginfeild_control_gradient_border'
								: ' '
							: props.select == '3'
							? 'login_activeinputfeild_text red_border'
							: 'red_border')
					}
					placeholder='Enter your password'
					value={props.formValues.password}
					onChange={props.handleChange}
					onClick={() => props.active('3')}
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

export default PasswField;
