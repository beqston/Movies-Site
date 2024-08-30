import classname from "../assets/style/home.module.scss"
import SideBar from "../Components/Side-Bar/SideBar";
import Search from "../Components/Search/Search";
import { useEffect, useState } from "react";
import { Data } from "../Types/Types";
import { Link } from "react-router-dom";
import bookmaker from "../assets/Photos/Bookmark.png"
import oval from "../assets/Photos/Oval.png"
import moveIcon from "../assets/Photos/movieIcon.png"


const Home = ()=> {

    const [movies, setMovies] = useState<Data[] | null>(null);

    const getData = async ()=> {
        const res = await fetch("http://localhost:5173/data.json")
        const data = await res.json()
        setMovies(data)
    }
    
    useEffect(()=> {
        getData()
    },[])
    
    return(
        <main className={classname["home"]}>
            <div className={classname["side-bar-cnt"]}>
                <SideBar />
            </div>

        <div className={classname["main-content-cnt"]}>
            
            <div className={classname["input-cnt"]}>
                <Search />
            </div>


            <section className={classname["trending-cnt"]}>

                <h2>Trending</h2>

                
                <article className={classname["trend"]}>

                        {
                            movies?.map((item)=>{
                                return(
                                    <>
                                        {
                                            item.isTrending &&
                                                <div className={classname["trending-items"]} key={item.title}>
                                                    <Link to={`http://localhost:5173/movie/${item.title}`}>
                                                        <img src={item.thumbnail.trending?.small} alt="Photo" />
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

                                                        <h2 className={classname["bottom"]}>
                                                            {item.title}
                                                        </h2>
                                                        
                                                    </div>

                                                    <div className={classname["bookmaker"]}>
                                                        <img src={bookmaker} alt="Photo" />
                                                    </div>
                                                </div>
                                        }
                                    </>
                                )
                            })
                        }


                </article>


            </section>


            <section className={classname["recomended-cnt"]}>

                <h2>Recommended for you</h2>


                <div className={classname["recomenden-wrapper"]}>
                    {
                        movies?.filter((item)=>!item.isTrending).map((item)=> {
                            return(
                                <div className={classname["div"]} key={item.title}>
                                    <div className={classname["item"]}>
                                        <Link to={`http://localhost:5173/movie/${item.title}`}>
                                            <img src={item.thumbnail.regular.large} alt="Photo" />
                                        </Link>

                                        <div className={classname["top"]}>
                                            <p>{item.year}</p>
                                            <img src={oval} alt="Photo" />
                                            <img src={moveIcon} alt="Photo" />
                                            <p>{item.category}</p>
                                            <img src={oval} alt="Photo" />
                                            <p>{item.rating}</p>
                                        </div>

                                        
                                        <div className={classname["bottom"]}>
                                            <h2>{item.title}</h2>
                                        </div>
                                    </div>

                                    <div className={classname["bookmaker"]}>
                                        <img src={bookmaker} alt="Photo" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

        </div>

        

        </main>
    )
}

export default Home;