import React, { useEffect, useState } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {

    /*useEffect--> when we scroll the page the navbar should disappear */
    const [show, handleShow] =useState(false);
    //with react router to navigate between pages--> use history
    const navigate = useNavigate();
    const transitioNavBar =() =>{
        if(window.scrollY > 100) //if you scroll more than  100 then show the navbar
        {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };
    /*useEffect--> this will only run when the components mounts */

    useEffect(
        () => {
            /*everytime we scroll an eventlistener will listen to it , so everytime we scroll , we are gonna trigger the transitionNavBar function*/
            window.addEventListener('scroll',transitioNavBar);
            /* cleanup function --> when the component mounts we want to cleanup-->its gonna remove the transitionNavBar function attached to the event listener*/
            return() => window.removeEventListener('scroll',transitioNavBar);
        },[]
    );

  return (
    /*only render the nav black style if show variable is true */
    <div className={ `nav  ${show && "nav_black"}`}>
        <div className='nav_content'>
            <img onClick={() => navigate('/')} className='nav_logo' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt=''/>
            <img onClick={()=> navigate('/profile')} className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
        </div>
    </div>
  );
}

export default Nav
