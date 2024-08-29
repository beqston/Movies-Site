import classname from "../assets/style/movies.module.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../Types/Types";


const Movies = ()=> {

    const [movies, setMovies] = useState<Data[] | null>(null)

    const getData = async ()=> {
        const res = await fetch("http://localhost:5173/data.json")
        const data = await res.json()
        setMovies(data)
        console.log(data)
    }
    
    useEffect(()=> {
        getData()
    },[])
    return(
        <div className={classname["movies-cnt"]}>
            
            <h2>Movies</h2>

            <div className={classname["movies"]}>

           
            {
                movies?.map((item)=>{
                    return(
                        <div>
                            {
                                item.isTrending &&
                                    <>
                                        <Link to={""}>
                                            <img src={item.thumbnail.trending?.small} alt="" />
                                        </Link>
                                    </>
                            }
                        </div>
                    )
                })
            }

</div>


        </div>
    )
}

export default Movies;