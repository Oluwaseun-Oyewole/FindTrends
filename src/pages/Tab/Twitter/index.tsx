import React, { useState, useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineNotification, AiOutlineProfile } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi";
import { SiMicrosoft } from "react-icons/si";
import { Button } from "../../../components/Button";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiHome7Fill, RiMessage2Line } from "react-icons/ri";
import { CustomTabComponent } from "../../../components/Tab";
import { ForYou } from "./twittertab/ForYou";
import { SearchTrend } from "./Search";
import { ContextProvider } from "../../../components/context/ContextProvider";

const TwitterContainer = styled.div`
  ${tw`flex min-h-[100vh] relative`}
  max-width:1500px;
  margin: 0 auto;

  > div:nth-child(1) {
    ${tw`text-white`}
    background: #fff;
    flex-basis: 20%;
    color: #000;
  }
  > div:nth-child(2) {
    flex-basis: 80%;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 1024px) {
    > div:nth-child(1) {
      flex-basis: 15%;
    }
    > div:nth-child(2) {
      flex-basis: 85%;
    }
  }

  @media screen and (max-width: 500px) {
    > div:nth-child(1) {
      ${tw`hidden`}
    }
    > div:nth-child(2) {
      flex-basis: 100%;
    }
  }
`;

const SidebarHorizontal = styled.div`
  ${tw`flex flex-col items-center`}
  height: 100vh;
  overflow: auto;
  overflow-y: scroll;
  margin: 0 auto;
  white-space: nowrap;
`;

const HomeSearch = styled.div`
  ${tw`flex text-body`}

  > div:first-child {
    ${tw`border-r-[2px] border-gray-100`}
    flex-basis: 65%;
  }
  > div:last-child {
    flex-basis: 35%;
  }

  height: 100vh;
  overflow-y: scroll;
  white-space: wrap;

  @media screen and (max-width: 768px) {
    > div:first-child {
      flex-basis: 100%;
    }
    > div:last-child {
      ${tw`hidden`}
    }
  }
`;

const twitterdata = [
  {
    icon: <RiHome7Fill />,
    title: "Home",
    topCircle: true,
    active: true,
  },

  {
    icon: <SiMicrosoft />,
    title: "Explore",
  },

  {
    icon: <HiOutlineUsers />,
    title: "Communities",
    topCircle: true,
  },
  {
    icon: <AiOutlineNotification />,
    title: "Notification",
  },

  {
    icon: <RiMessage2Line />,
    title: "Messages",
  },

  {
    icon: <BsBookmark />,
    title: "Bookmarks",
  },

  {
    icon: <AiOutlineProfile />,
    title: "Profile",
  },

  {
    icon: <CiCircleMore />,
    title: "More",
  },
];

export const Twitter = () => {
  const [scroll, setScroll] = useState(true);

  const { show }: any = useContext(ContextProvider);

  return (
    <div className="w-full">
      <TwitterContainer>
        <SidebarHorizontal>
          <div className="flex flex-col gap-3">
            <div className="flex-start text-3xl self-start pt-5 pl-6">
              <BsTwitter color="#1DA1F2" />
            </div>

            {twitterdata?.map(
              ({ title, icon, topCircle, active }, index): any => {
                return (
                  <div
                    key={index}
                    className={`py-3 px-8 flex items-center gap-3 text-xl cursor-pointer relative hover:bg-gray-200 hover:rounded-full transition-all ${
                      active && "font-extrabold"
                    }`}
                  >
                    {topCircle ? (
                      <>
                        <div className="bg-blue-500 h-2 w-2 rounded-full absolute top-3 left-10"></div>
                        <span className="text-2xl">{icon}</span>{" "}
                        <span className="hidden xl:block">{title}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-2xl"> {icon} </span>
                        <span className="hidden xl:block">{title}</span>
                      </>
                    )}
                  </div>
                );
              }
            )}
          </div>
          <div className="pt-5 hidden xl:block">
            <Button
              children="Tweet"
              onClick={() => null}
              background="#1DA1F2"
              padding={true}
              paddingvalues="12px 80px"
              opacity={0.5}
              fontSize={20}
            />
          </div>

          <div className="flex justify-between gap-10 mt-4 items-center hover:bg-gray-100 p-3 hover:rounded-full hover:cursor-pointer transition-all ease-in-out duration-500 px-10 py-4">
            <div className="flex gap-2">
              <img
                src="/assets/img/pexel.jpg"
                alt=""
                className="md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-12 xl:h-10 rounded-full"
              />
              <div className="text-sm hidden xl:block">
                <p>Oluwaseun</p>
                <p className="text-body text-xs">@_justcode21</p>
              </div>
            </div>

            <div className="cursor-pointer hidden xl:block">
              <FiMoreHorizontal />
            </div>
          </div>

          {show && (
            <div className="p-5 card absolute bg-white shadow-2xl min-h-[270px] w-[320px] top-[300px] left-[150px] z-10 rounded-xl hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out">
              <div>
                <div className="flex items-center justify-between">
                  <img
                    src="/assets/img/pexel.jpg"
                    alt=""
                    className="w-[50px] rounded-full h-[50px]"
                  />
                  <h1 className="border-2 border-gray-200 px-5 py-1 text-black text-sm rounded-3xl">
                    Following
                  </h1>
                </div>
                <p className="font-bold text-black">Da Vinci of Design</p>
                <p className="text-sm">@Mercee__</p>
                <p className="py-3 text-sm">Product Designer @getallvapp</p>

                <div className="flex items-center justify-between text-xs">
                  <p>350 Following</p>
                  <p>3000 Followers</p>
                </div>

                <div className="pt-4 flex gap-2 items-center">
                  <img
                    src="/assets/img/pexel.jpg"
                    alt=""
                    className="w-[30px] rounded-full h-[30px] "
                  />
                  <p className="text-sm">Followed by Seun Oyewole</p>
                </div>
              </div>
            </div>
          )}
        </SidebarHorizontal>

        <HomeSearch>
          <div className="relative">
            <CustomTabComponent
              tabs={[
                {
                  id: 0,
                  tabTitle: "For you",
                  tabBody: <ForYou />,
                },

                {
                  id: 1,
                  tabTitle: "Following",
                  tabBody: <ForYou />,
                },

                {
                  id: 2,
                  tabTitle: "#DevAfter30",
                  tabBody: <ForYou />,
                },
              ]}
              className={`h-[120px] bg-white z-10 sticky top-0`}
              heading="Home"
              scroll={scroll}
              isMobile={true}
            />
          </div>
          <div>
            <SearchTrend />
          </div>
        </HomeSearch>
      </TwitterContainer>
    </div>
  );
};
