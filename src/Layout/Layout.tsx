import { useContext, useEffect, useLayoutEffect } from "react";
import { BookmarkContext, BookmarkContextType } from "../Context/BookmarkContext";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = ()=> {

    const { isLogin} = useContext(BookmarkContext) as BookmarkContextType;
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(()=> {
        if(isLogin){
            localStorage.setItem("isLogin", JSON.stringify(isLogin))
        }
        
    }, [isLogin])


    useLayoutEffect(() => {
        const getItem = localStorage.getItem("isLogin")

        if(getItem){
           const isLogin = Boolean(JSON.parse(getItem))

            if (!isLogin) {
                if (pathname !== "/register") {
                    navigate("login");
                }
            }
    
            if(isLogin && pathname == "/login"){
                navigate("/")
            }
        }
        

    }, [isLogin, pathname]);

    return(
        <>
            <Outlet />
        </>
    )
}

export default Layout;