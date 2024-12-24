import classname from "../assets/style/movie.module.scss"
import { useEffect, useState } from "react";
import { Data } from "../Types/Types";
import { Link, useParams } from "react-router-dom";

const Movie = ()=> {
    const [movies, setMovies] = useState<Data[] | null>(null);

    const {movieTitle} = useParams();

    const getData = async ()=> {
        const res = await fetch("http://localhost:5173/data.json")
        const data = await res.json()
        setMovies(data)
    }
    
    useEffect(()=> {
        getData()
    },[])

    return(
        <main className={classname["main-movie"]}>

            {
                movies?.filter((item)=> item.title === movieTitle).map((movie)=> {
                    return(
                        <div key={movie.title} className={classname["item"]}>
                            <h1>{movie.title}</h1>
                            <h3>{movie.category}</h3>
                            <p>{movie.year}</p>
                            <div>
                                <img src={`http://localhost:5173/${movie.thumbnail.regular.large}`} alt="photo" />
                                <h4 className={classname["error-message"]}>The movie didn't load.</h4>
                            </div>
                            <div><Link to={"/"}>Back To Home</Link></div>
                        </div>
                    )
                })
            }

        </main>
    )
}

export default Movie;