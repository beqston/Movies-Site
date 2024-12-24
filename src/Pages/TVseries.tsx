import classname from "../assets/style/TVseries.module.scss";
import { useContext, useEffect, useState, useCallback } from "react";
import { Data } from "../Types/Types";
import { Link } from "react-router-dom";
import SideBar from "../Components/Side-Bar/SideBar";
import Search from "../Components/Search/Search";
import bookmaker from "../assets/Photos/Bookmark.png";
import oval from "../assets/Photos/Oval.png";
import moveIcon from "../assets/Photos/movieIcon.png";
import play from "../assets/Photos/play.svg";
import { BookmarkContext, BookmarkContextType } from "../Context/BookmarkContext";

const TVseries = () => {
    const [movies, setMovies] = useState<Data[] | null>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const { addBookmark } = useContext(BookmarkContext) as BookmarkContextType;

    const handleMoviesPlay = useCallback((index: number) => {
        setHoverIndex(index);
    }, []);

    const getData = useCallback(async () => {
        const res = await fetch("http://localhost:5173/data.json");
        const data = await res.json();
        setMovies(data);
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    const renderTVSeriesItems = () => {
        return movies
            ?.filter((item) => item.category.includes("TV Series"))
            .map((item, index) => (
                <div
                    key={item.title}
                    onMouseLeave={() => setHoverIndex(null)}
                    onMouseOver={() => handleMoviesPlay(index)}
                    className={classname["TVseries-item-cnt"]}
                >
                    <Link to={`http://localhost:5173/movie/${item.title}`}>
                        <picture>
                            <img
                                src={`http://localhost:5173/${item.thumbnail.regular.large}`}
                                alt="photo"
                            />
                            <source
                                media="(min-width: 768px) and (max-width: 1024px)"
                                srcSet={`http://localhost:5173/${item.thumbnail.regular.medium}`}
                            />
                            <source
                                media="(max-width: 768px)"
                                srcSet={`http://localhost:5173/${item.thumbnail.regular.small}`}
                            />
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

                    <div onClick={() => addBookmark(item)} className={classname["bookmaker"]}>
                        <img src={bookmaker} alt="Bookmark" />
                    </div>

                    {hoverIndex === index && (
                        <div className={classname["TVseries-play"]}>
                            <Link to={`http://localhost:5173/movie/${item.title}`}>
                                <img src={play} alt="Play" />
                                <span>Play</span>
                            </Link>
                        </div>
                    )}
                </div>
            ));
    };

    return (
        <main className={classname["TVseries-cnt"]}>
            <aside className={classname["side-bar-cnt"]}>
                <SideBar />
            </aside>

            <div className={classname["TVseries-main-cnt"]}>
                <div className={classname["input-cnt"]}>
                    <Search />
                </div>

                <h2>TV Series</h2>

                <div className={classname["TVseries"]}>{renderTVSeriesItems()}</div>
            </div>
        </main>
    );
};

export default TVseries;
