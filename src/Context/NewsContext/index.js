import React, { createContext, useEffect, useState } from 'react'

// Create context
export const NewsContext = createContext();



// Provider
const NewsProvider = ({children}) => {
    const [news, setNews] = useState()
    const [searchInput, setSearchInput] = useState("Ethical hacking")

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