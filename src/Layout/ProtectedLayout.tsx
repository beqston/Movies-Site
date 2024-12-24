import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"

const ProtectedLayout = ()=> {
    const navigate = useNavigate()
        useEffect(() => {
            // Check login status from localStorage only once on mount.
            const storedLoginStatus = localStorage.getItem("isLogin");
            if (!storedLoginStatus) {
                navigate("/login", {replace: true})
            }
    
        }, []);

    return(
        <>
            <Outlet />
        </>
    )
}

export default ProtectedLayout;