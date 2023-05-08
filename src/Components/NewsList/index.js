import React from "react";

const NewsList = (news, index) => {
 
   const handleClick =(id) => {
console.log(id)
    }

    console.log(news.news.objectID)
  return (
    <div className="shadow-2xl ">
      <div className=" px-8 py-3   border-b-4 mb-5 ">
        <div className="flex justify-between px-5  items-center  mx-auto">
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
        </div>
        <h1 onClick={() => handleClick(news.news.objectID)} className="text-xl  font-semibold cursor-pointer ">
          {news.news.title}
        </h1>
        
        <a href={news.news.url} className="text-blue-500 hover:underline ">
          {news.news.url}
        </a>

        <p className="truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tristique mauris tincidunt, fermentum leo sit amet,
          <br /> scelerisque mi. Duis a egestas nibh. Nulla quis augue sed nisi
          sollicitudin porta. Integer sit...
        </p>
      </div>
    </div>
  );
};

export default NewsList;
