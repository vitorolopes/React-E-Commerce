import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children, ...rest}) => {

  console.log(children);
  console.log(rest)
//! HERE
  // const {myUser} = useUserContext()
  const {user} = useAuth0()

  return (
            user ? children : <Navigate to="/"/>
          )
};
export default PrivateRoute;
