import React, { useState } from 'react'
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';


function LoginScreen() {

const [signIn,setSignIn]=useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
            <img
                className='loginScreen_logo'
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt=''
            />
            <button 
                 className='loginScreen_button'
                 onClick={() => setSignIn(true)}
            >Sign In</button>
            <div className='loginScreen_gradient' />
        </div>
        <div className='loginScreen_body'>
            {/*if signin button is clicked then we are gonna render signIn screen otherwise render the login screen page*/}
            {signIn ? (
                <SignUpScreen/>
            ):(

           
            <>
                <h1>Unlimited movies, TV showa and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className='loginScreen_input'>
                    <form>
                        <input
                            type='email' placeholder='Email Address'
                        />
                        <button
                          onClick={() => setSignIn(true)}
                          className='loginScreen_getStarted'>GET STARTED</button>
                    </form>
                </div>
            </>
             )}
        </div>
      
    </div>
  )
}

export default LoginScreen
