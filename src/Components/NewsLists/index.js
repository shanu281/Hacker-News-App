import React, { useContext } from "react";
import { NewsContext } from "../../Context/NewsContext";
import NewsList from "../NewsList";
import Loader from "../Loader";

const NewsLists = () => {
  const { news } = useContext(NewsContext);
  console.log(news);
  return (
    <section>
      <div>
        {news === undefined ? (
          <div className="w-full h-[600px] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div>
            {news.hits.map((item, index) => {
              return <div key={item.id}> <NewsList news={item} index={index} /></div>;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsLists;
