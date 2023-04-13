import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { HiPhoto } from "react-icons/hi2";
import { RiVideoFill, RiArticleFill } from "react-icons/ri";
import {
  BsFillCalendarDateFill,
  BsDot,
  BsGlobeAsiaAustralia,
  BsFillSendFill,
} from "react-icons/bs";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLike, AiOutlineBulb } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";

const cardinfo = [
  { title: "Photo", icon: <HiPhoto className="text-linkedin" /> },
  { title: "Video", icon: <RiVideoFill className="text-green-600" /> },
  { title: "Events", icon: <BsFillCalendarDateFill /> },
  {
    title: "Write Articles",
    icon: <RiArticleFill className="text-orange-600" />,
  },
];

const StartPost = styled.div`
  ${tw`flex items-center gap-3`}
  > img {
    flex-basis: 5%;
  }
  > div {
    flex-basis: 95%;
  }
`;

export const RightSection = () => {
//   const [show, setShow] = useState(false);
  return (
        <div className="bg-green-300 text-center">
            
            {/* <div className="flex items-center ">
            <img
            //   src="/assets/img/Bg-hero.png"
            src="/assets/img/img-hero.png"
              alt=""
              className="h-[70px] w-[70px] rounded-full border-2 border-white absolute top-7"
            />
            <div className="pt-6 text-center pb-5 ">
              <h1 className="font-bold pt-4 pb-1 hover:underline cursor-pointer">
                Olúwáṣeun Oyèwọlé
              </h1>
              <p className="text-xs font-medium font-Quicksand text-gray-600">
                Frontend Developer, React, Next Js
              </p>
            </div>
          </div> */}

        <div className=" px-7 py-4 flex-col justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="/assets/img/pexel.jpg"
              alt=""
              className="w-[45px] h-[45px] rounded-full"
            />
            <div>
              <div className="text-sm flex items-center text-gray-400">
                <p className="text-black">Olúwáṣeun Oyèwọlé</p>
              </div>
              <div className="text-gray-500 text-sm py-1 font-medium">
                <p>Frontend Developer</p>
                {/* <div className="flex gap-2 items-center">
                  1d . Edited .{" "}
                  <span>
                    <BsGlobeAsiaAustralia />
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="text-gray-500 flex gap-1 font-bold border-solid rounded-md outline-stone-700">
            <AiOutlinePlus />
            <p>Follow</p>
          </div>
        </div>
        <div className=" px-7 py-4 flex-col justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="/assets/img/pexel.jpg"
              alt=""
              className="w-[45px] h-[45px] rounded-full"
            />
            <div>
              <div className="text-sm flex items-center text-gray-400">
                <p className="text-black">Olúwáṣeun Oyèwọlé</p>
              </div>
              <div className="text-gray-500 text-sm py-1 font-medium">
                <p>Frontend Developer</p>
                {/* <div className="flex gap-2 items-center">
                  1d . Edited .{" "}
                  <span>
                    <BsGlobeAsiaAustralia />
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="text-gray-500 flex gap-1 font-bold border-solid rounded-md outline-stone-700">
            <AiOutlinePlus />
            <p>Follow</p>
          </div>
        </div>
        <div className=" px-7 py-4 flex-col justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="/assets/img/pexel.jpg"
              alt=""
              className="w-[45px] h-[45px] rounded-full"
            />
            <div>
              <div className="text-sm flex items-center text-gray-400">
                <p className="text-black">Olúwáṣeun Oyèwọlé</p>
              </div>
              <div className="text-gray-500 text-sm py-1 font-medium">
                <p>Frontend Developer</p>
                {/* <div className="flex gap-2 items-center">
                  1d . Edited .{" "}
                  <span>
                    <BsGlobeAsiaAustralia />
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="text-gray-500 flex gap-1 font-bold border-solid rounded-md outline-stone-700">
            <AiOutlinePlus />
            <p>Follow</p>
          </div>
        </div>
        <div className=" px-7 py-4 flex-col justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="/assets/img/pexel.jpg"
              alt=""
              className="w-[45px] h-[45px] rounded-full"
            />
            <div>
              <div className="text-sm flex items-center text-gray-400">
                <p className="text-black">Olúwáṣeun Oyèwọlé</p>
              </div>
              <div className="text-gray-500 text-sm py-1 font-medium">
                <p>Frontend Developer</p>
                {/* <div className="flex gap-2 items-center">
                  1d . Edited .{" "}
                  <span>
                    <BsGlobeAsiaAustralia />
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="text-gray-500 flex gap-1 font-bold border-solid rounded-md outline-stone-700">
            <AiOutlinePlus />
            <p>Follow</p>
          </div>
        </div>
        <div className=" px-7 py-4 flex-col justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="/assets/img/pexel.jpg"
              alt=""
              className="w-[45px] h-[45px] rounded-full"
            />
            <div>
              <div className="text-sm flex items-center text-gray-400">
                <p className="text-black">Olúwáṣeun Oyèwọlé</p>
              </div>
              <div className="text-gray-500 text-sm py-1 font-medium">
                <p>Frontend Developer</p>
                {/* <div className="flex gap-2 items-center">
                  1d . Edited .{" "}
                  <span>
                    <BsGlobeAsiaAustralia />
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="text-gray-500 flex gap-1 font-bold border-solid rounded-md outline-stone-700">
            <AiOutlinePlus />
            <p>Follow</p>
          </div>
        </div>
        



        </div>
    
  );
};
