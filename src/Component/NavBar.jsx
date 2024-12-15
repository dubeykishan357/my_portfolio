import React, { useState } from "react";
import pic from "../../public/assets/assets/image/hero.avif";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
function NavBar() {
  const [menu, setMenu] = useState(false);
  const navIcons = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Expriance" },
    { id: 5, text: "Contect" },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px20 shadow-md  h-16 fixed top-0 left-0 right-0 z-50">
        <div className=" flex justify-between center mt-4">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Hars<span className="text-xl text-blue-700">h</span>
            </h1>
            <p className="text-sm">web devloper</p>
          </div>
          {/* dest nav */}
          <div>
            <ul className=" hidden md:flex space-x-8">
              {navIcons.map(({ id, text }) => (
                <li
                  className=" hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link to={text}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  >{text}</Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24} /> : < IoMenu size={24} />}
            </div>
          </div>
        </div>
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-4">
              {navIcons.map(({ id, text }) => (
                <li
                  className=" hover:scale-105 duration-200 cursor-pointer font-semibold text-xl"
                  key={id}
                >
                  <Link onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  >{text}</Link>
                  
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
