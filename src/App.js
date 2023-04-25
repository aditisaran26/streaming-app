import React, { useEffect } from 'react';
import HomeScreen from './Screens/HomeScreen';
import './App.css';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import LoginScreen from './Screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen';


function App() {
  const user=useSelector(selectUser); //this will give the user back
  const dispatch = useDispatch();

useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged(userAuth =>{
    //if user exists
    if(userAuth){
      //logged in
      dispatch(
        login({
        uid: userAuth.uid,
        email:userAuth.email,

      }))
    }else{
      //logged out
      dispatch(logout()); //if we logged out it is going to reset the user back to null
    }
  });
  return unsubscribe;
},[dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
      {/*if the user is not logged in we are going to direct him to the login page otherwise if logged in then render the homescreen */}
      {!user?(
        <LoginScreen/>
      ):(

    
        <Routes>
          <Route path='/profile' element={[<ProfileScreen/>]}/>
          <Route path="/" element={[<HomeScreen/>]} />
          

         
        </Routes>
           )}
      </BrowserRouter>
     
   
         
    </div>
  );
}

export default App;
