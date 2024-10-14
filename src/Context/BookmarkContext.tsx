import { createContext, useState } from "react";
import { Data } from "../Types/Types";

export interface BookmarkContextType {
    bookmarkMovies: Data[] | null;
    bookmarkTVSeries: Data[] | null;
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    setBookmarkMovies: React.Dispatch<React.SetStateAction<Data[] | null>>;
    setBookmarkTVSeries: React.Dispatch<React.SetStateAction<Data[] | null>>;
    addBookmark: (item: Data) => void; 
    removeBookmark: (item: Data) => void;
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);



const BookmarkContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [bookmarkMovies, setBookmarkMovies] = useState<Data[]>([]);
    const [bookmarkTVSeries, setBookmarkTVSeries] = useState<Data[]>([]);

    const [searchText, setSearchText] = useState("");

    const addBookmark = (item: Data)=> {
        if(item.category === "Movie"){
            setBookmarkMovies((prev) => {
                if (!prev) return [item]; 
                if (prev.some(existingItem  => existingItem.title === item.title)) return prev; 
                return [...prev, item]; 
            });
        }

        if(item.category === "TV Series"){
            setBookmarkTVSeries((prev)=> {
                if(!prev) return [item]
                if(prev.some((existingItem )=> existingItem.title == item.title)) return prev;
                return [...prev, item]
            })
        }
    }



    const removeBookmark = (item: Data)=> {
        if(bookmarkMovies){
            if(item.category === "Movie"){
                setBookmarkMovies([...bookmarkMovies?.filter((movie)=> movie !== item)])
            }
        }
        if(bookmarkTVSeries){
            if(item.category === "TV Series"){
                setBookmarkTVSeries([...bookmarkTVSeries?.filter((tv)=> tv !== item)])
            }
        }
    }


    return (
        <BookmarkContext.Provider value={{ bookmarkMovies, bookmarkTVSeries, setBookmarkMovies, setBookmarkTVSeries, addBookmark, removeBookmark, searchText, setSearchText }}>
            {children}
        </BookmarkContext.Provider>
    );
};

export default BookmarkContextProvider;