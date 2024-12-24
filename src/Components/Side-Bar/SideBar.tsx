import classname from "./style.module.scss"
import burg from "../../assets/Photos/side-bar/burg.png"
import film from "../../assets/Photos/side-bar/film.png"
import movie from "../../assets/Photos/side-bar/movie.png"
import tv from "../../assets/Photos/side-bar/tv.png"
import bookmark from "../../assets/Photos/side-bar/Bookmark.png"
import profileImg from "../../assets/Photos/side-bar/profileImg.png"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { BookmarkContext, BookmarkContextType } from "../../Context/BookmarkContext"

const SideBar = ()=> {

    const navigate = useNavigate();

    const { setSearchText, isLogin, setIsLogin} = useContext(BookmarkContext) as BookmarkContextType;
    const [loginOut, setLoginOut] = useState(false)

    
    const handlClearSearchText = ()=> {
        setSearchText("")
    }

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setLoginOut(!loginOut)
      }

      const handleLogOut = ()=> {
        localStorage.setItem("isLogin", JSON.stringify(false))
        navigate("/login")
      }



    return(

        <aside onClick={handlClearSearchText} className={classname["side-bar"]}>

            {
                loginOut && 
                <div className={classname["modal"]}>
                    <h2>Are you sure you want to log out?</h2>

                    <div>
                        <button onClick={()=> setLoginOut(false)}>Cancel</button>
                        <button onClick={handleLogOut}>Login Out</button>
                    </div>

                </div>
            }

            <div onClick={()=>navigate("/")} className={classname["movie"]}>
                <img src={movie} alt="photo" />
            </div>
            
            <div onChangeCapture={handlClearSearchText} className={classname["menu"]}>
                <img onClick={()=>{navigate("/")}} src={burg} alt="photo"/>
                <img onClick={()=>navigate("/movies")} src={film}  alt="photo"/>
                <img onClick={()=> navigate("/tv-series")} src={tv} alt="photo" />
                <img onClick={()=> navigate("/bookmark")} src={bookmark} alt="photo" />
            </div>

            <div onClick={scrollToTop} className={classname["profile"]}>
                <img src={profileImg} alt="photo" />
            </div>
        </aside>
    )
}

export default SideBar;