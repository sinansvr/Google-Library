import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

const Login = () => {
    // const [user, setUser] = useState({userName:"",password:""})
    const {user,setUser}=useAuthContext()

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(-1)
    }
    
    console.log(user)

    return (
        <div className='container my-5 w-50 bg-light rounded p-3 text-center' >
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="mb-3 ">
                    <label htmlFor="userName" className="form-label">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="userName"
                        onChange={(e)=>setUser({...user,userName:e.target.value})}

                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        onChange={(e)=>setUser({...user,password:e.target.value})}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Send
                </button>
            </form>

        </div>
    )
}

export default Login