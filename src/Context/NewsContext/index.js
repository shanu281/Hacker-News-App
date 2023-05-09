import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// Create context
export const NewsContext = createContext();



// Provider
const NewsProvider = ({children}) => {
    const [news, setNews] = useState()
    // const [searchInput, setSearchInput] = useState("Ethical hacking")
    const {searchInput} = useParams
   console.log("params" ,searchInput)
    // Fetch News 
    useEffect(() => {
        fetch("http://hn.algolia.com/api/v1/search?query=test")
        .then((res) => res.json())
        .then((data) => setNews(data))
    },[])
   
  return (
    <NewsContext.Provider 
    value={{news, setNews }}
    >
        {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;