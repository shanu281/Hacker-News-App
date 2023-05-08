import React, { useContext } from "react";
import { NewsContext } from "../../Context/NewsContext";
import NewsList from "../NewsList";
import Loader from "../Loader";

const NewsLists = () => {
  const { news } = useContext(NewsContext);
  console.log(news)
  return (
    <section>
      <div>
        {
            news === undefined  ?  
                 
            <Loader />
                 :
                (
                   <div>
                    {
                        news.hits.map((item, index) => {
                            return (
                                <NewsList news={item} />
                            )
                        }
                        )

                    }
                   </div>
                    )
        }
        
      </div>
    </section>
  );
};

export default NewsLists;
