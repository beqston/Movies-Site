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
        <main>

            {
                movies?.filter((item)=> item.title === movieTitle).map((movie)=> {
                    return(
                        <div>
                            <h1>{movie.title}</h1>
                            <h3>{movie.category}</h3>
                            <p>{movie.year}</p>

                            <Link to={"/"}>Back To Home</Link>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default Movie;