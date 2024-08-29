import "./style.scss"
import search from "../../assets/Photos/search.png"
const Search = ()=> {
    return(
        <div className="search-input-wraper">
            <input className="search-input" type="text" placeholder="Search for TV series" />
            <img className="search-img" src={search} alt="image" />
        </div>
    )
}

export default Search;