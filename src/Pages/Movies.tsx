import classname from "../assets/style/movies.module.scss"
import { useContext, useEffect, useState } from "react";
import { Data } from "../Types/Types";
import { Link } from "react-router-dom";
import SideBar from "../Components/Side-Bar/SideBar";
import Search from "../Components/Search/Search";
import bookmaker from "../assets/Photos/Bookmark.png"
import oval from "../assets/Photos/Oval.png"
import moveIcon from "../assets/Photos/movieIcon.png"
import play from "../assets/Photos/play.svg"
import { BookmarkContext, BookmarkContextType } from "../Context/BookmarkContext";


const Movies = ()=> {

    const [movies, setMovies] = useState<Data[] | null>(null);
    const [moviesPlay, setMoviesPlay] = useState<number>();
    const {addBookmark} = useContext(BookmarkContext) as BookmarkContextType;

    

    const handlMoviesPlay = (index: number)=>{
        setMoviesPlay(index)
    }


    const getData = async ()=> {
        const res = await fetch("http://localhost:5173/data.json")
        const data = await res.json()
        setMovies(data)
    }
    
    useEffect(()=> {
        getData()
    },[])


    return(
        <main className={classname["movies-cnt"]}>
            
            <aside className={classname["side-bar-cnt"]}>
                <SideBar />
            </aside>

            <div className={classname["movies-main-cnt"]}>

                <div className={classname["input-cnt"]}>
                    <Search />
                </div>

                <h2>Movies</h2>


                <div className={classname["movies"]}>

            
                    {
                        movies?.filter((item)=> item.category.includes("Movie")).map((item, index)=>{
                            return(

                                <div key={item.title} onMouseLeave={()=> setMoviesPlay(-1)} onMouseOver={()=>handlMoviesPlay(index)} className={classname["movies-item-cnt"]}>
                                    <Link to={`http://localhost:5173/movie/${item.title}`}>
                                        <picture>
                                            <img src={`http://localhost:5173/${item.thumbnail.regular.large}`} alt="photo" />
                                            <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`http://localhost:5173/${item.thumbnail.regular.medium}`}/>
                                            <source media="(max-width: 768px)" srcSet={`http://localhost:5173/${item.thumbnail.regular.small}`}/>
                                        </picture>
                                    </Link>

                                    <div className={classname["title"]}>
                                        <div className={classname["top"]}>
                                            <p>{item.year}</p>
                                                <img src={oval} alt="Photo" />
                                                <img src={moveIcon} alt="Photo" />
                                                <p>{item.category}</p>
                                                <img src={oval} alt="Photo" />
                                            <p>{item.rating}</p>
                                        </div>
                                        <h2>{item.title}</h2>
                                    </div>

                                    <div onClick={()=> addBookmark(item)} className={classname["bookmaker"]}>
                                        <img src={bookmaker} alt="Photo" />
                                    </div>

                                    {
                                        moviesPlay === index &&
                                        <div className={classname["movies-play"]}>
                                            <Link to={`http://localhost:5173/movie/${item.title}`}> 
                                            <img src={play} alt="play" />
                                            <span>Play</span>
                                            </Link>
                                        </div>
                                    } 

                                </div>
                            )
                        })
                    }

                    

                </div>

            </div>
        </main>
    )
}

export default Movies;