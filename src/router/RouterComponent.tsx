import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import ScrottToTop from "./Scroll";
import Movie from "../Pages/Movie";
import TVseries from "../Pages/TVseries";
import Bookmark from "../Pages/Bookmark";
import SearchResult from "../Pages/SearchResult";




const RouterComponent = ()=> {
   
    return(
        <BrowserRouter>
        <ScrottToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/movies"} element={<Movies />} />
                    <Route path={"/movie/:movieTitle"} element={<Movie />} />
                    <Route path={"/tv-series"} element={<TVseries />} />
                    <Route path={"/bookmark"} element={<Bookmark />} />
                    <Route path={"/search"} element={<SearchResult />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;