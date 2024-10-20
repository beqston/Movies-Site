import classname from "./style.module.scss"
import burg from "../../assets/Photos/side-bar/burg.png"
import film from "../../assets/Photos/side-bar/film.png"
import movie from "../../assets/Photos/side-bar/movie.png"
import tv from "../../assets/Photos/side-bar/tv.png"
import bookmark from "../../assets/Photos/side-bar/Bookmark.png"
import profileImg from "../../assets/Photos/side-bar/profileImg.png"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { BookmarkContext, BookmarkContextType } from "../../Context/BookmarkContext"

const SideBar = ()=> {

    const navigate = useNavigate();

    const { setSearchText} = useContext(BookmarkContext) as BookmarkContextType;

    
    const handlClearSearchText = ()=> {
        setSearchText("")
    }

    return(

        <aside onClick={handlClearSearchText} className={classname["side-bar"]}>

            <div onClick={()=>navigate("/")} className={classname["movie"]}>
                <img src={movie} alt="photo" />
            </div>
            
            <div onChangeCapture={handlClearSearchText} className={classname["menu"]}>
                <img onClick={()=>{navigate("/")}} src={burg} alt="photo"/>
                <img onClick={()=>navigate("/movies")} src={film}  alt="photo"/>
                <img onClick={()=> navigate("/tv-series")} src={tv} alt="photo" />
                <img onClick={()=> navigate("/bookmark")} src={bookmark} alt="photo" />
            </div>

            <div className={classname["profile"]}>
                <img src={profileImg} alt="photo" />
            </div>
        </aside>
    )
}

export default SideBar;