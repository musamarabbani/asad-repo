import React from 'react'
import { IconUser } from '../../../assets/images/svg'

export const FullName = (props) => {
  return (
    <div>
      <label for='exampleFormControlInput1' className='form-label'>
        Full Name
      </label>

      <div className='icon_inputfield'>
        <IconUser className='icon_position' />
        <input
          type='text'
          name='name'
          autoFocus={props.isAtuoFocus}
          className={
            'login_inputfeild_txt login_activeinputfeild_text loginfeild_control ' +
            (props.isbtnBordername == false
              ? props.select == '1'
                ? 'login_activeinputfeild_text loginfeild_control_gradient_border'
                : ''
              : props.select == '1'
              ? 'login_activeinputfeild_text red_border'
              : 'red_border')
          }
          placeholder='Enter your full name'
          value={props.formValues.name}
          onChange={props.handleChange}
          onClick={() => props.active('1')}
        />
      </div>
    </div>
  )
}
