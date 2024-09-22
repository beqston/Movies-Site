import { createContext, useState } from "react";
import { Data } from "../Types/Types";

export interface BookmarkContextType {
    bookmarkMovies: Data[] | null;
    bookmarkTVSeries: Data[] | null;
    setBookmarkMovies: React.Dispatch<React.SetStateAction<Data[] | null>>;
    setBookmarkTVSeries: React.Dispatch<React.SetStateAction<Data[] | null>>;
    addBookmark: (item: Data) => void; 
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);



const BookmarkContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [bookmarkMovies, setBookmarkMovies] = useState<Data[] | null>(null);
    const [bookmarkTVSeries, setBookmarkTVSeries] = useState<Data[] | null>(null);

    console.log(bookmarkMovies)

    const addBookmark = (item: Data)=> {
        if(bookmarkMovies === null && item.category === "Movie"){
            setBookmarkMovies([ item])
        }
        if(bookmarkMovies !== null && item.category === "Movie"){
            setBookmarkMovies([...bookmarkMovies, item])
        }

        if(bookmarkTVSeries === null && item.category === "TV Series"){
            setBookmarkTVSeries([item])
        }
        if(bookmarkTVSeries !== null && item.category === "TV Series"){
            setBookmarkTVSeries([...bookmarkTVSeries, item])
        }
    }

    return (
        <BookmarkContext.Provider value={{ bookmarkMovies, bookmarkTVSeries, setBookmarkMovies, setBookmarkTVSeries, addBookmark }}>
            {children}
        </BookmarkContext.Provider>
    );
};

export default BookmarkContextProvider;