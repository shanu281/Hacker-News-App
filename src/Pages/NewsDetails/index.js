import React, { useContext } from "react";
import { NewsContext } from "../../Context/NewsContext";
import { useParams } from "react-router-dom";
import { GoCommentDiscussion } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import Home from "../Home";
const NewsDetails = () => {
  const { news } = useContext(NewsContext);
  const { id } = useParams();
  const {searchInput} = useParams()

  //Destructure news
  // const {title, description, author, url, urlToImage} = news;

  
  console.log(id);
  console.log(searchInput);
  //
  const newNews = news.hits.filter((e) => {
    return e.objectID === id;
  });

  console.log(newNews);
  console.log(newNews[0].title);

  return (
    <section className="container  mx-auto shadow-2xl mt-[125px]">
      {/* Header  */}
      <div className="mb-2">
        <h1 className="text-6xl z-20 font-primary text-center">
          {newNews[0].title}
        </h1>
      </div>
      {/* Hero section  */}
      <div className=" flex  justify-around lg:flex-row sm:flex-col">
       
        <div className=" flex flex-col   w-2/3  sm:w-full  ">
          {/* Image  */}
          <div className=" h-[450px] w-[700px] mx-auto  shadow-2xl mb-4 sm:h-[300px] sm:w-[400px] sm:mx-auto ">
            <img
              className="h-full w-full overflow-hidden"
              src="/news-img.png"
              alt="news-image"
            />
          </div>
          {/* Descriptions  */}
          <div className=" p-4">
            <p className="text-xl indent-10 ">
              Lorem ipsum dolor sit amet. Id eius repudiandae eum explicabo
              voluptatibus 33 laborum cupiditate qui nihil nisi sit perferendis
              sunt sit tempore pariatur. Aut molestiae ipsum sit consequatur
              modi ea rerum nemo. Quo ducimus sunt 33 dolorem praesentium rem
              molestiae numquam non dolorem repellendus qui minima accusantium!
              Sed sequi eaque nam quia error est consequatur omnis. Ut quae
              cupiditate et nihil cumque eum deserunt delectus aut molestiae
              nihil. Quo pariatur ullam est adipisci aperiam sit excepturi
              tenetur et quaerat illum sit numquam placeat et consequuntur
              consequuntur. Et nihil quam qui enim sint ab rerum mollitia ab
              pariatur provident nam voluptatem maxime. Ea nihil optio ut
              ducimus pariatur qui expedita nisi. Ut magnam consectetur et
              quaerat soluta sed sint expedita est soluta galisum et facilis
              sapiente id nulla voluptates! Eos tenetur voluptas vel ipsa cumque
              a facere reiciendis ut tempora incidunt ad omnis quam. Et
              quibusdam eius est recusandae corporis vel sint dolores. Quo
              molestias fugiat et sapiente laboriosam id ipsum velit eos nulla
              tempora. Non enim numquam et iure debitis et autem mollitia est
              Quis laboriosam sit nostrum harum quo quos neque. Et accusantium
              eaque quo corrupti maiores qui natus magni qui laborum ratione et
              odit temporibus?
            </p>
          </div>
          <div className="w-1/3 mx-auto">
          <button className="btn bg-teal-800 text-white btn-primary  hover:bg-teal-600 hover:text-white transition duration-700 py-3 font-bold text-xl w-full shadow-2xl mb-5">
            Read More
          </button>
        </div>
        </div>

        {/* Details  */}
        <div>
          <div className=" flex flex-col justify-around items-center w-[350px] sm:mx-auto">
            <div className="flex-1 bg-white  mb-8 border border-gray-300 rounded-lg px-6 py-8 w-full shadow-2xl ">
              <div className=" p-1  items-center   ">
                <div className="border-b-4 text-2xl mb-2">
                  Created on:{" "}
                  {newNews[0].created_at.split("").slice(0, 10).join("")}
                </div>
                <div className="border-b-4 text-2xl mb-2">
                  {" "}
                  Author:{" "}
                  <span className="text-red-500 font-semibold capitalize  ">
                    {newNews[0].author}
                  </span>
                </div>
              </div>
 <div>
                <div className="flex items-center text-3xl border-b-4 mb-2">
                  <GoCommentDiscussion />  : {newNews[0].num_comments}
                </div>
                <div className="flex items-center text-3xl border-b-4 mb-2">
                  <FcLike />  : {newNews[0].points}
                </div>
                <div className="flex items-center text-3xl border-b-4 mb-2">
                  <BiLike />  : {newNews[0].relevancy_score}
                </div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-2xl font-semibold">Contact Author</h2>
              <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 shadow-2xl">
                <div className="flex items-center gap-x-4 mb-8 justify-center">
                  <div className="w-20 h-20 p-1 border border-gray-300 rounded-full ">
                    <img
                      className="rounded-full"
                      src="/author.jpeg"
                      alt="image"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg capitalize">
                      {newNews[0].author}
                    </div>
                  </div>
                </div>
                <form className="flex flex-col gap-y-4">
                  <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                    type="text"
                    placeholder="Name*"
                  />
                  <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                    type="text"
                    placeholder="Email*"
                  />
                  <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                    type="text"
                    placeholder="Phone*"
                  />
                  <textarea
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full p-4 h-36 text-sm text-gray-400"
                    placeholder="Message*"
                    defaultValue="Hello, I am impressed with your article....."
                  ></textarea>
                  <div className="flex gap-x-2">
                    <button className="bg-violet-700 hover:bg-violet-900 text-white rounded p-4 text-sm w-full transition">
                      Send Message
                    </button>
                    <button className=" bg-green-500 border border-violet-700 text-white hover:bg-green-600 hover:text-white-1000  rounded p-4 text-sm w-full transition">
                      Call
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    </section>
  );
};

export default NewsDetails;
