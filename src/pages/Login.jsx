import React from 'react'
import loginImg from '../assets/images/Two factor authentication-bro.svg'
import logo from '../assets/images/app_logo.png'
import LoginForm from '../components/login page/LoginForm'

const Login = () => {
  return (
    <div className='w-full h-full min-h-screen bg-bgPrimary p-4 '>
        <div className='w-full max-w-screen-xl min-h-screen mx-auto flex flex-col md:flex-row gap-5 '>
            {/* login page image */}
            <div className='w-0 h-fit lg:w-1/2 md:h-full md:min-h-screen hidden lg:flex items-center justify-center  '>
            <img src={loginImg} alt="login image" className='w-full h-auto ' />
           

            </div>

            {/* login form */}
            <div className='w-full h-fit lg:w-1/2 md:h-full md:min-h-screen flex flex-col items-center p-6 justify-center  '>
            <img src={logo} alt="logo" className='w-40 md:w-60 lg:hidden '/>
            <LoginForm/>

            </div>

        </div>
      
    </div>
  )
}

export default Login
