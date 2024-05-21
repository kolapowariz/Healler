import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // console.log(isAuthenticated);
  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}




export default AuthProvider;