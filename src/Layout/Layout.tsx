import { useContext, useEffect } from "react";
import { BookmarkContext, BookmarkContextType } from "../Context/BookmarkContext";
import { useLocation, useNavigate } from "react-router-dom";
import ProtectedLayout from "./ProtectedLayout";
import LoginLayout from "./LoginLayout";

const Layout = () => {
    const { isLogin, setIsLogin } = useContext(BookmarkContext) as BookmarkContextType;
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        // Check login status from localStorage only once on mount.
        const storedLoginStatus = localStorage.getItem("isLogin");
        if (storedLoginStatus) {
            setIsLogin(true)
        }else{
            setIsLogin(false)
        }

    }, [ pathname, navigate, setIsLogin]);

    return <>{isLogin ? <ProtectedLayout /> : <LoginLayout />}</>;
};

export default Layout;
