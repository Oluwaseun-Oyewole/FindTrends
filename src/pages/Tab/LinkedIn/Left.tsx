import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  AiFillFolder,
  AiOutlineArrowUp,
  AiOutlinePlus,
  AiOutlineArrowDown,
} from "react-icons/ai";

const Section = styled.div`
  ${tw`flex flex-col`}

  > div:first-child {
    ${tw`h-[70px]`}
    background: rgba(0, 0, 0, 1);
  }
  > div:last-child {
  }
`;

const Recents = styled.div`
  ${tw`mt-3 text-xs flex flex-col`}
  > div {
    ${tw`py-[6px] text-gray-600`}
    &:hover {
      ${tw`bg-gray-200 transition-all ease-in-out duration-500 text-black`}
    }
  }
`;

const Groups = styled.div`
  ${tw`pt-6 text-linkedin text-xs flex flex-col gap-3 font-bold`}
  p {
    ${tw`hover:underline cursor-pointer`}
  }
  div {
    ${tw`hover:underline cursor-pointer`}
  }
`;

export const LeftSection = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Section className="relative">
        <div></div>
        <div className="shadow-lg bg-white">
          <div className="flex flex-col items-center ">
            <img
              src="/assets/img/Bg-hero.png"
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
          </div>

          <div className="border-t-2 border-gray-200 pt-2 text-xs text-gray-600 flex flex-col gap-2">
            <div className="hover:bg-gray-200 transition-all ease-in-out duration-500 cursor-pointer py-2">
              <div className="profile flex justify-between w-[90%] mx-auto ">
                <p className="">Who viewed your profile</p>
                <p className="text-linkedin font-bold">6</p>
              </div>
            </div>
            <div className="hover:bg-gray-100 transition-all ease-in-out duration-500 cursor-pointer">
              <div className="pb-2 w-[90%] mx-auto">
                <div className="flex justify-between">
                  <p>Connections</p>
                  <p className="font-bold text-linkedin">476</p>
                </div>
                <p className="font-medium text-black">Grow your network</p>
              </div>
            </div>

            <div className="border-t-2 border-gray-200 text-xs hover:bg-gray-100 transition-all ease-in-out duration-500 cursor-pointer">
              <div className="py-3 w-[90%] mx-auto ">
                <p>Access exclusive tools & insights</p>
                <div className="flex items-center gap-2">
                  <AiFillFolder className="font-bold text-yellow-500 text-xl" />
                  <p className="text-black hover:underline">
                    Retry Premium free
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-gray-200 py-3 hover:bg-gray-100 transition-all ease-in-out duration-500 cursor-pointer">
              <div className=" w-[90%] mx-auto flex gap-2 items-center">
                <AiFillFolder size={25} />
                <p className="text-black text-sm">My items</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 bg-white rounded-lg pt-3 shadow-lg">
          <div className="px-3">
            <div
              className="flex items-center text-sm justify-between font-medium"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <p>Recent</p>
              {show && <AiOutlineArrowUp />}
            </div>
            <Recents>
              <div># internship</div>
              <div># Build Your Tech Career at Mic...</div>
              <div># Ask Engineers Anything | Fec...</div>
              <div># backend</div>
              <div># Motivation</div>
            </Recents>
            <Groups>
              <p>Groups</p>
              <div className="flex justify-between">
                <p>Events</p> <AiOutlinePlus size={20} />
              </div>
              <p>Followed Hashtags</p>
            </Groups>
            <Recents>
              <div># internship</div>
              <div># backend</div>
              <div># Motivation</div>
              <div className="flex gap-2 items-center pb-5 ">
                Show more <AiOutlineArrowDown />
              </div>
            </Recents>
          </div>

          <div className=" mt-3 border-t-2 border-gray-200 hover:bg-gray-100 cursor-pointer transition-all ease-in-out duration-500">
            <p className="text-center py-2 text-gray-500">Discover More</p>
          </div>
        </div>
      </Section>
    </>
  );
};
