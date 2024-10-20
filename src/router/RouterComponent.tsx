import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import ScrottToTop from "./Scroll";
import Movie from "../Pages/Movie";
import TVseries from "../Pages/TVseries";
import Bookmark from "../Pages/Bookmark";
import SearchResult from "../Pages/SearchResult";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import ProtectedLayout from "../Layout/ProtectedLayout";
import LoginLayout from "../Layout/LoginLayout";




const RouterComponent = ()=> {
   
    return(
        <BrowserRouter>
            <ScrottToTop />
                <Routes>

                    <Route element={<Layout />}>

                        <Route element={<ProtectedLayout />}>
                            <Route path={"/"} element={<Home />} />
                            <Route path={"/movies"} element={<Movies />} />
                            <Route path={"/movie/:movieTitle"} element={<Movie />} />
                            <Route path={"/tv-series"} element={<TVseries />} />
                            <Route path={"/bookmark"} element={<Bookmark />} />
                            <Route path={"/search"} element={<SearchResult />} />
                            <Route path={"*"} element={<NotFound />} />
                        </Route>

                        <Route element={<LoginLayout />}>
                            <Route path={"/login"} element={<Login />} />
                            <Route path={"/register"} element={<Register />} />
                        </Route>

                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;