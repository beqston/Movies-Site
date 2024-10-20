import { useContext, useEffect, useLayoutEffect } from "react";
import { BookmarkContext, BookmarkContextType } from "../Context/BookmarkContext";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = ()=> {

    const { isLogin} = useContext(BookmarkContext) as BookmarkContextType;
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(()=> {
        localStorage.setItem("isLogin", JSON.stringify(isLogin))
    }, [isLogin])

    

    

    useLayoutEffect(() => {
        if (!isLogin) {
            if (pathname === "/") {
                navigate("login");
            } else if (pathname !== "/register") {
                navigate("login");
            }
        }

        if(isLogin && pathname == "/login"){
            navigate("/")
        }

    }, [isLogin, pathname]);

    return(
        <>
            <Outlet />
        </>
    )
}

export default Layout;