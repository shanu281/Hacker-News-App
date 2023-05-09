import React, { useEffect, useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-gray-600 py-6 " : "bg-black py-8 text-white"
      } fixed top-0 z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto items-center flex fle-col gap-y-6 lg:flex-row justify-between lg:gap-y-0">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px]">
              <img
                className="h-full w-full overflow-hidden"
                src="HN-Logo.webp"
                alt="logo-image"
              />
            </div>
            <div className="font-primary text-white text-4xl ">Hacker News</div>
          </div>
        </div>
        <nav>
          <div className="flex text-white items-center gap-2">
            Follow us on :
            <div>
              <a href="#">
                {" "}
                <AiFillFacebook className="text-3xl  rounded-full" />{" "}
              </a>
            </div>
            <div>
              <a href="#">
                {" "}
                <AiFillInstagram className="text-red-400 text-3xl rounded-full" />{" "}
              </a>
            </div>
            <div>
              <a href="#">
                {" "}
                <AiFillTwitterCircle className="text-white-500 text-3xl rounded-full" />{" "}
              </a>
            </div>
            <div>
              <a href="#">
                {" "}
                <AiFillYoutube className=" text-3xl text-red-600  rounded-full" />{" "}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>

  
  );
};

export default Header;
