import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
    }, [location]);

    return null;
};

export default ScrollToTop;