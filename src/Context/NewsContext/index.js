import React, { createContext, useEffect, useState } from 'react'

// Create context
export const NewsContext = createContext();

// Provider
const NewsProvider = ({children}) => {
    const [news, setNews] = useState()

    // Fetch News 
    useEffect(() => {
        fetch("http://hn.algolia.com/api/v1/search?query=test")
        .then((res) => res.json())
        .then((data) => setNews(data))
    },[])
    console.log(news)
  return (
    <NewsContext.Provider 
    value={{news, setNews }}
    >
        {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;