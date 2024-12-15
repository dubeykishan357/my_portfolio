import React from "react";
import pic from "../../public/assets/assets/image/hero.avif"


import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped} from "react-typed";
function Home() {
  return (
    <>
      <div name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24  order-2 md:order-1">
            <span className=" flex text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className=" text-red-700 font-bold">Devloper</span> */}

              <ReactTyped
              className=" text-red-700 font-bold"
                strings={["Devloper","Programer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />

            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              labore obcaecati aspernatur consectetur expedita fuga autem
              delectus eos vel maiores repellat neque rem quod id iusto impedit,
              ab sint! Provident?
            </p>
            <br />
            <div className=" flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className=" space-y-3m ">
                <h1 className=" font-bold ">Available on</h1>
                <ul className="flex space-x-5 ">
                  <li>
                    <a href="https://www.facebook.com/login.php/" target="blank">
                    <FaSquareFacebook className="text-2xl cursor-pointer" />
                    
                    </a>
                  </li>
                  <li>
                   <a href="https://www.instagram.com/accounts/login/?hl=en" target="blank">
                    <IoLogoInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/notifications/?filter=all" target="blank">
                    <FaLinkedin className="text-2xl cursor-pointer" /></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="blank">
                    <FaSquareYoutube className="text-2xl cursor-pointer" /></a>
                  </li>
                  <li>
                    <a href="https://web.telegram.org/" target="blank">
                    <FaTelegram className="text-2xl cursor-pointer" /></a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-3">
                <h1 className="font-bold">Currently working on</h1>
                <div className=" flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-40 md:mt-19 order-1">
          <img src={pic} className="rounded-full md:w-[450] md:h-[450]" alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
