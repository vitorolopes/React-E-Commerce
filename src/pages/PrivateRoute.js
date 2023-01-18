import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children, ...rest}) => {

  console.log(children);
  console.log(rest)

  const {myUser} = useUserContext()

  return (
            myUser ? children : <Navigate to="/"/>
          )
};
export default PrivateRoute;
