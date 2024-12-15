import React from 'react'
import Html from "../../public/assets/assets/image/Html.png"
import Css from "../../public/assets/assets/image/Css.png"
import BootStrap from "../../public/assets/assets/image/BootStrap.png"
import TailWindCss from "../../public/assets/assets/image/Tailwind.png"
import Js from "../../public/assets/assets/image/Js.png"

function Expreiance() {
  const cardItems=[
    {
      id:1,
      logo:Html,
      name:"html"
    },
    {
      id:2,
      logo:Css,
      name:"Css"
    },
    {
      id:3,
      logo:BootStrap,
      name:"BootStrap"
    },
    {
      id:4,
      logo:TailWindCss,
      name:"TailwindCss"
    },
    {
      id:5,
      logo:Js,
      name:"JavaScript"
    }
  ]
  return (
    <>
    <div
        name="Expriance"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 "
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Expreince</h1>
          <span className=" underline font-semibold">Featured Projects</span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-7 my-8 ">
            {cardItems.map(({ id, logo, name }) => (
              <div
                className="flex flex-col items-center justify-center border-[2px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300 gap-3 md:h-[220px] md:w-[200px]"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[130px] rounded-full"
                  alt=""
                />
                <div>
                  <div>{name}</div>
                  
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Expreiance