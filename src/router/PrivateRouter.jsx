import { Navigate, Outlet} from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"



const PrivateRouter = () => {
  
  const {user}=useAuthContext();

  return user.userName && user.password ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRouter