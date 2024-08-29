import classname from "./style.module.scss"
import burg from "../../assets/Photos/side-bar/burg.png"
import film from "../../assets/Photos/side-bar/film.png"
import movie from "../../assets/Photos/side-bar/movie.png"
import tv from "../../assets/Photos/side-bar/tv.png"
import bookmark from "../../assets/Photos/side-bar/Bookmark.png"
import profileImg from "../../assets/Photos/side-bar/profileImg.png"

const SideBar = ()=> {
    return(

        <aside className={classname["side-bar"]}>

            <div className={classname["movie"]}>
                <img src={movie} alt="photo" />
            </div>
            
            <div className={classname["menu"]}>
                <img src={burg}  alt="photo"/>
                <img src={film}  alt="photo"/>
                <img src={tv} alt="photo" />
                <img src={bookmark} alt="photo" />
            </div>

            <div className={classname["profile"]}>
                <img src={profileImg} alt="photo" />
            </div>
        </aside>
    )
}

export default SideBar;