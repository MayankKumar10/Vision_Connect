import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RestrictAuth = () => {
 const location  = useLocation();
 const user = useSelector((state)=>state.auth.currentUser);
 
  return user._id ? (
    <Navigate to={location.state !== null ? location.state.from.pathname : '/home'} state={{from: location}} replace/>
  ): (
    <Outlet /> 
  )
}
