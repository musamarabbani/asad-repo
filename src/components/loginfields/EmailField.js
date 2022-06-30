import React from 'react';
import { IconMail } from '../../assets/images/svg';

const EmailField = (props) => {
	return (
		<div>
			<label for='exampleFormControlInput1' className='form-label'>
				Email
			</label>

			<div className='icon_inputfield'>
				<IconMail className='icon_position' />
				<input
					type='email'
					name='email'
					className={
						'login_inputfeild_txt login_activeinputfeild_text loginfeild_control ' +
						(props.isbtnBorderEmail == false
							? props.select == '2'
								? 'login_activeinputfeild_text loginfeild_control_gradient_border'
								: ''
							: props.select == '2'
							? 'login_activeinputfeild_text red_border'
							: 'red_border')
					}
					placeholder='Enter your email'
					value={props.formValues.email}
					onChange={props.handleChange}
					onClick={() => props.active('2')}
				/>
			</div>
		</div>
	);
};

export default EmailField;
