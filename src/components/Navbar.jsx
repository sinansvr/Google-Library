import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"


const Navbar = () => {

  const {user,setUser}=useAuthContext();
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to="/" className="navbar-brand" >
            Google Library
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link" >
                  Register
                </Link>                
              </li>
              {user.userName && user.password ? <li><Link to="/login" className="nav-link" 
              onClick={()=>setUser({userName:"",password:""})} >Logout</Link></li>              
              : <li><Link to="/login" className="nav-link" >Login</Link></li>}     
   
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
