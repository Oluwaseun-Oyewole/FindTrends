import React, { useContext } from "react";
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
import { ModalContext } from "../../../components/store/ModalContext";

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

export const MiddleCard = () => {
  const { handleModalOpening } = useContext(ModalContext);

  return (
    <div className="w-full">
      <div className="rounded-lg w-[100%] mx-auto bg-white pt-3 pb-1">
        <div className="w-[95%] mx-auto">
          <StartPost>
            <img
              src="/assets//img/Bg-hero.png"
              alt=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <div
              className="border-[1px] border-gray-400 rounded-full p-3 text-gray-500 bg-white font-bold cursor-pointer"
              onClick={handleModalOpening}
            >
              start a post
            </div>
          </StartPost>
          <div className="flex items-center justify-between">
            {cardinfo?.map((card): any => {
              return (
                <div className="mt-2 py-3 flex items-center text-2xl gap-2 hover:bg-gray-100 transition-all ease-in-out duration-500 px-3 rounded-lg cursor-pointer">
                  {card.icon}{" "}
                  <span className="text-sm text-gray-500">{card.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="my-2 flex items-center gap-4 text-sm">
        <div className="bg-gray-300 h-[2px] w-[80%] "></div>
        <div className="flex items-center">
          <span className="text-gray-500">sort by</span>: Top{" "}
          <RiArrowDropDownFill />
        </div>
      </div>

      <div className=" bg-white rounded-lg">
        <div className="px-7 flex justify-between items-center border-b-2 border-gray-100 py-4">
          <div className="flex items-center gap-2">
            <img
              src="/assets/img/Bg-hero.png"
              alt=""
              className="w-[25px] h-[25px] rounded-full"
            />
            <div className="text-xs flex gap-1">
              <p className="hover:text-blue-600 hover:underline cursor-pointer">
                Olúwáṣeun Oyèwọlé
              </p>
              <p className="text-gray-500">reposted this</p>
            </div>
          </div>
          <span className="hover:bg-gray-200 rounded-full p-1 cursor-pointer transition-all ease-in-out duration-500">
            <FiMoreHorizontal />
          </span>
        </div>

        <div className=" px-7 py-4 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="/assets/img/pexel.jpg"
              alt=""
              className="w-[45px] h-[45px] rounded-full"
            />
            <div>
              <div className="text-sm flex items-center text-gray-400">
                <p className="text-black">Olúwáṣeun Oyèwọlé</p>
                <BsDot />
                <p>2nd</p>
              </div>
              <div className="text-gray-500 text-sm py-1 font-medium">
                <p>Frontend Developer</p>
                <div className="flex gap-2 items-center">
                  1d . Edited .{" "}
                  <span>
                    <BsGlobeAsiaAustralia />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-linkedin flex items-center gap-1 font-bold">
            <AiOutlinePlus />
            <p>Follow</p>
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          <div className="px-7">
            <p>C# Do's And Don't For Better Coding!</p>
            <div className="flex items-center justify-between py-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                praesentium
              </p>
              <div className="flex items-center gap-2 hover:text-blue-500 hover:underline cursor-pointer">
                <FiMoreHorizontal />
                see more
              </div>
            </div>
          </div>

          <div className="bg-pexel-img h-[650px] w-full bg-no-repeat bg-center bg-cover"></div>
          <div className="px-7 py-2 text-sm font-medium flex justify-between font-Quicksand">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <AiOutlineLike />
                <FcLike />
                <AiOutlineBulb className="text-yellow-700" />
              </div>
              <div>
                <p>Olúwáṣeun Oyèwọlé and 7,000 others</p>
              </div>
            </div>

            <div className="flex items-center gap-3 ">
              <p> 175 Comments</p>
              <p>17 reposts</p>
            </div>
          </div>

          <div className="mt-3 px-7 py-3 flex justify-between text-lg border-t-2 border-gray-200 relative">
            {/* <div className="absolute bg-red-500 w-[300px] h-[50px] -top-[50px] -left-[20px] rounded-lg">
              Testing
            </div> */}
            <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer rounded-md h-[42px] w-[150px] justify-center transition-all ease-in-out duration-500">
              <AiOutlineLike />
              <p className="text-sm">Like</p>
            </div>

            <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer rounded-md h-[42px] w-[150px] justify-center transition-all ease-in-out duration-500">
              <FaRegCommentDots /> <p className="text-sm">Comment</p>
            </div>

            <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer rounded-md h-[42px] w-[150px] justify-center transition-all ease-in-out duration-500">
              <BiRepost />
              <p className="text-sm">Repost</p>
            </div>

            <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer rounded-md h-[42px] w-[150px] justify-center transition-all ease-in-out duration-500">
              <BsFillSendFill />
              <p className="text-sm">Send</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white rounded-lg">
        <div className="px-7 flex justify-between items-center border-b-2 border-gray-100 py-4">
          <div className="flex items-center gap-2">
            <img
              src="/assets/img/Bg-hero.png"
              alt=""
              className="w-[25px] h-[25px] rounded-full"
            />
            <div className="text-xs flex gap-1">
              <p className="hover:text-blue-600 hover:underline cursor-pointer">
                Olúwáṣeun Oyèwọlé
              </p>
              <p className="text-gray-500">reposted this</p>
            </div>
          </div>
          <span className="hover:bg-gray-200 rounded-full p-1 cursor-pointer transition-all ease-in-out duration-500">
            <FiMoreHorizontal />
          </span>
        </div>

        <div className=" px-7 py-4 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="/assets/img/pexel.jpg"
              alt=""
              className="w-[45px] h-[45px] rounded-full"
            />
            <div>
              <div className="text-sm flex items-center text-gray-400">
                <p className="text-black">Olúwáṣeun Oyèwọlé</p>
                <BsDot />
                <p>2nd</p>
              </div>
              <div className="text-gray-500 text-sm py-1 font-medium">
                <p>Frontend Developer</p>
                <div className="flex gap-2 items-center">
                  1d . Edited .{" "}
                  <span>
                    <BsGlobeAsiaAustralia />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-linkedin flex items-center gap-1 font-bold">
            <AiOutlinePlus />
            <p>Follow</p>
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          <div className="px-7">
            <p>C# Do's And Don't For Better Coding!</p>
            <div className="flex items-center justify-between py-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                praesentium
              </p>
              <div className="flex items-center gap-2 hover:text-blue-500 hover:underline cursor-pointer">
                <FiMoreHorizontal />
                see more
              </div>
            </div>
          </div>

          <div className="bg-pexel-img h-[650px] w-full bg-no-repeat bg-center bg-cover"></div>
          <div className="px-7 py-2 text-sm font-medium flex justify-between font-Quicksand">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <AiOutlineLike />
                <FcLike />
                <AiOutlineBulb className="text-yellow-700" />
              </div>
              <div>
                <p>Olúwáṣeun Oyèwọlé and 7,000 others</p>
              </div>
            </div>

            <div className="flex items-center gap-3 ">
              <p> 175 Comments</p>
              <p>17 reposts</p>
            </div>
          </div>

          <div className="mt-3 px-7 py-3 flex justify-between text-lg border-t-2 border-gray-200 relative">
            {/* <div className="absolute bg-red-500 w-[300px] h-[50px] -top-[50px] -left-[20px] rounded-lg">
              Testing
            </div> */}
            <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer rounded-md h-[42px] w-[150px] justify-center transition-all ease-in-out duration-500">
              <AiOutlineLike />
              <p className="text-sm">Like</p>
            </div>

            <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer rounded-md h-[42px] w-[150px] justify-center transition-all ease-in-out duration-500">
              <FaRegCommentDots /> <p className="text-sm">Comment</p>
            </div>

            <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer rounded-md h-[42px] w-[150px] justify-center transition-all ease-in-out duration-500">
              <BiRepost />
              <p className="text-sm">Repost</p>
            </div>

            <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer rounded-md h-[42px] w-[150px] justify-center transition-all ease-in-out duration-500">
              <BsFillSendFill />
              <p className="text-sm">Send</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
