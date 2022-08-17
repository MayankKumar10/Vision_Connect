import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

export const LandingPage = () => {
  const[loginState, setLoginState] = useState(false);


  return (
    <div>
      <h4>LandingPage</h4>
      {loginState ?
      <>
      <Signup />
      <a
      onClick={()=>setLoginState(!loginState)}
      >Already have an account ?</a>
      </>
      :
     <> 
     <Login />
     <a
      onClick={()=>setLoginState(!loginState)}
      >Create an account ?</a>
     </>  
    }
    </div>
  )
}
