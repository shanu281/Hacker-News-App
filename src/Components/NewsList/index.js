import React from "react";

const NewsList = () => {
  return (
    <div className="shadow-2xl">
      <div className=" p-4  border-b-4">
        <h1 className="text-xl  font-semibold cursor-pointer ">News title</h1>
        <a href="#">news url</a>
        <p>Description</p>
      </div>
    </div>
  );
};

export default NewsList;
