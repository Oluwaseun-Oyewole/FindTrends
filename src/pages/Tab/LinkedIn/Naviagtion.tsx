import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { MdWork, MdBusiness } from "react-icons/md";
import { RiMessage2Fill, RiArrowDropDownFill } from "react-icons/ri";
import { GrFormSearch } from "react-icons/gr";
import { HiHome, HiUsers } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import styled from "styled-components";
import tw from "twin.macro";
import { FcBusiness } from "react-icons/fc";

const NavigationLink = styled.div`
  ${tw`border-r-2 border-gray-300`}
`;

const NavigationContainer = styled.div`
  ${tw`flex items-center  h-[80px] sticky top-0 z-10 bg-white`}

  div {
    ${tw`max-w-[1370px] mx-auto`}
  }
  > div:first-child {
    flex-basis: 40%;
  }
  > div:last-child {
    flex-basis: 60%;
  }
`;

const Profile = styled.div``;
const Business = styled.div``;

const RightNavigation = styled.div`
  ${tw`flex items-center`}

  > div:first-child {
    flex-basis: 70%;
  }
  > div:last-child {
    flex-basis: 30%;
  }
`;

const LinkedInMenuLinks = styled.div`
  ${tw`flex border-r-[2px] border-gray-200`}

  div:not(:last-child) {
    padding-right: 46px;
  }
  div:last-child {
    padding-right: 10px;
  }
`;
const RightNavigationDetails = styled.div`
  ${tw`flex gap-1 items-center pl-5`}
`;

const linkedInLinks = [
  {
    icon: <HiHome />,
    title: "Home",
    circle: true,
  },

  { icon: <HiUsers />, title: "My Network" },
  { icon: <MdWork />, title: "Jobs" },
  { icon: <RiMessage2Fill />, title: "Messaging" },
  { icon: <IoMdNotifications />, title: "Notifications", notification: true },
];

export const LinkedInNaviagtion = () => {
  return (
    <NavigationContainer>
      <div className="relative">
        <form className="flex gap-3">
          <BsLinkedin size={40} color="#0072b1" />
          <div className="relative w-full">
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-100 h-[40px] w-[60%] focus:w-[80%] transition-all ease-in-out duration-500  placeholder:text-black placeholder:opacity-50 pl-10 placeholder:text-lg"
              placeholder="search"
            />
            <span className="absolute left-[10px] top-2">
              <GrFormSearch size={25} />
            </span>
          </div>
        </form>
      </div>

      <RightNavigation>
        <LinkedInMenuLinks>
          {linkedInLinks?.map((link, index): any => {
            return (
              <>
                <div
                  className="relative flex flex-col gap-1 items-center text-2xl text-gray-500 hover:text-black transition-all ease-in-out duration-500 cursor-pointer"
                  key={index}
                >
                  {link.circle ? (
                    <>
                      {link.icon}
                      <span className="text-sm font-light">{link.title}</span>
                      <div className="h-[15px] w-[15px] bg-red-500 rounded-full absolute flex items-center justify-center left-4">
                        <span className="-mr-[10.2px] h-[8px] w-[8px] bg-white block rounded-full"></span>
                      </div>
                    </>
                  ) : (
                    <>
                      {link.icon}
                      <span className="text-sm font-light">{link.title}</span>
                    </>
                  )}
                </div>
              </>
            );
          })}
          <div>
            <img
              src="/assets/img/pexel.jpg"
              alt="profile image"
              className="w-[35px] h-[35px] rounded-full"
            />

            <div className="flex items-center">
              <span className="text-sm font-light">Me</span>
              <span>
                <RiArrowDropDownFill />
              </span>
            </div>
          </div>
        </LinkedInMenuLinks>

        <RightNavigationDetails>
          <div className="flex flex-col items-center">
            <FcBusiness size={23} />
            <div className="flex items-center">
              <span className="font-light text-sm">For Business</span>
              <RiArrowDropDownFill />
            </div>
          </div>

          <div className="flex flex-col text-xs gap-1 font-medium text-pink-600 underline">
            <a href="#">Get Hired Faster</a>
            <a href="#">Try Premium Free</a>
          </div>
        </RightNavigationDetails>
      </RightNavigation>
    </NavigationContainer>
  );
};
