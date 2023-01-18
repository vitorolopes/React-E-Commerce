import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {

  const {isAuthenticated, loginWithRedirect, logout, 
         user , isLoading} = useAuth0()

  const [myUser, setMyUser] = useState(null)
//! HERE
  // useEffect(() => {
  //   console.log("isLoading: ", isLoading)
  //   if(isAuthenticated){
  //     setMyUser(user)
  //   } else {
  //     setMyUser(false)
  //   }
  // }, [isAuthenticated])
    useEffect(() => {
      setMyUser(user)
    }, [user])
    
  return (
    <UserContext.Provider 
      value={{
        loginWithRedirect, logout, myUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export const useUserContext = () => {
  return useContext(UserContext)
}
