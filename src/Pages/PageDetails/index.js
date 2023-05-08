import React, { useContext } from 'react'
import { NewsContext } from '../../Context/NewsContext'

const NewsDetails = () => {
    const {news} = useContext(NewsContext);
  return (
    <section>
        <div>
            <h1>Title</h1>
            <div>
                <img src='news-img' alt='news-image'/>
            </div>
            {/* <div className="flex justify-between px-5  items-center  mx-auto">
          <div>
            Created on: {news.news.created_at.split("").slice(0, 10).join("")}
          </div>
          <div>
            {" "}
            Author:{" "}
            <span className="text-red-500 font-semibold capitalize">
              {news.news.author}
            </span>
          </div>
          </div> */}
            <p>discriptions</p>

        </div>
    </section>
  )
}

export default NewsDetails