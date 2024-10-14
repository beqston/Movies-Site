import "./style.scss"
import search from "../../assets/Photos/search.png"
import { useContext } from "react"
import { BookmarkContext, BookmarkContextType } from "../../Context/BookmarkContext"
import { useNavigate } from "react-router-dom"
const Search = ()=> {

    const {searchText, setSearchText} = useContext(BookmarkContext) as BookmarkContextType;
    const navigate = useNavigate();

    const handSearch = (e: React.KeyboardEvent<HTMLInputElement>)=> {
        if(searchText.length == 0){
            return
        } 
        if(e.key == "Enter"){
            navigate("/search")
        }
    }

    return(
        <div className="search-input-wraper">
            <input className="search-input" value={searchText} 
                onChange={(e)=>setSearchText(e.target.value.toLowerCase())} type="text" 
                placeholder="Search for TV series" 
                onKeyUpCapture={(e)=>handSearch(e)}
            />
            <img onClick={()=> navigate("/search")} className="search-img" src={search} alt="image" />
        </div>
    )
}

export default Search;