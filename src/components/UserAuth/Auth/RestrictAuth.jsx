import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RestrictAuth = () => {
  const {token} = useSelector((state) => state.auth);
  const location = useLocation();

  return token ? (
    <Navigate to={'/homepage'} state={{from: location}} replace/>
  ): (
    <Outlet /> 
  )
}
