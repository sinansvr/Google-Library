import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../pages/home/Home"
import Register from "../pages/register/Register"
import Login from "../pages/login/Login"
import NotFound from "../pages/notFound/NotFound"
import Detail from "../pages/detail/Detail"
import About from "../pages/about/About"
import PrivateRouter from "./PrivateRouter"
import { AuthProvider } from "../context/AuthContext"


const AppRouter = () => {

    
    return (
        <>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    
                    <Route path="/login" element={<Login />} />
                                 
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<PrivateRouter />}>
                        <Route path="/about" element={<About />} />
                    </Route>
                    <Route path="/detail/:id" element={<PrivateRouter />}>
                        <Route path="/detail/:id" element={<Detail />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </AuthProvider>

        </>
    )
}

export default AppRouter