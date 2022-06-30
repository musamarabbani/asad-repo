import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginHeader = () => {
  const navigate = useNavigate()

  return (
    <div className='header_container'>
      <div className='logoWidth' />
      <div className='header_btn'>
        <div className='btn_signIn'>
          <a className='effect ' onClick={() => navigate('/')}>
            <span style={{ cursor: 'pointer' }}>Sign In</span>
          </a>
        </div>
        <button
          type='button'
          className=' signUp btn_signUp'
          onClick={() => navigate('/')}
        >
          SignUp
        </button>
      </div>
    </div>
  )
}

export default LoginHeader
