import React from 'react';
import './SignUpScreen.css';
import { useRef } from 'react';
import  {auth}  from '../firebase';



function SignUpScreen() {
    const emailRef=useRef(null);
    const passwordRef=useRef(null);

/*two functions ; one for registration */

const register = (e) =>{
    /*to prevent the degault behaviour i.e button to refersh every time when a person is inside the form */
    e.preventDefault();
    /*when we click the register button , i wanna create the account with email and password */
    auth.createUserWithEmailAndPassword(
        emailRef.current.value ,
         passwordRef.current.value
         )
    .then((authUser) => {
        console.log(authUser);
    })
    .catch((error)=>{
        alert(error.message);
    });
 
    };
   


   /* function for SVGTextPositioningElement*/
   const signIn = (e) =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword( emailRef.current.value ,
        passwordRef.current.value).then((authUser) =>{
            console.log(authUser);
        })
        .catch((error)=>alert(error.message));
   }; 

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type='email'/>
            <input ref={passwordRef} placeholder='Password' type='password'/>
            <button type='submit'onClick={signIn}>Sign In</button>
            <h4>
                <span className='signupscreen_gray'>New to Netflix ? </span>
                <span className='signupscreen_link'onClick={register}> Sign Up now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignUpScreen

/*forauthentication
1. capture the info from the email tab--> have a piece of state to track what is email and password and update it orrrr
you can use a referrence


*/