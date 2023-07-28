import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"


const AuthContext = createContext()



export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({ userName: "", password: "" })

  const values = {
    user,
    setUser,
  }

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}


export const useAuthContext = () => {
  return useContext(AuthContext)
}


