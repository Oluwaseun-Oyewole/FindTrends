import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { MdWork, MdBusiness } from "react-icons/md";
import { RiMessage2Fill, RiArrowDropDownFill } from "react-icons/ri";
import { GrFormSearch } from "react-icons/gr";
import { HiHome, HiUsers } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import styled from "styled-components";
import tw from "twin.macro";
import { FcBusiness } from "react-icons/fc";
import { SearchFormModal } from "./SearchFormModal";

const NavigationLink = styled.div`
  ${tw`border-r-2 border-gray-300`}
`;

const NavigationContainer = styled.div`
  ${tw`block md:flex items-center h-[50px] bg-white lg:max-w-[1250px] mx-auto bg-gray-200`}

  > div:first-child {
    flex-basis: 42%;
  }
  > div:last-child {
    flex-basis: 58%;
  }

  @media screen and (max-width: 800px) {
    margin-left: 55px;
    > div:first-child {
      flex-basis: 90%;
    }
    > div:last-child {
      ${tw`hidden`}
    }
  }

  @media screen and (max-width: 500px) {
    margin-left: 10px;
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

  @media screen and (max-width: 1024px) {
    > div:first-child {
      flex-basis: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    > div:first-child {
      display: none;
    }
    > div:last-child {
      dislay: none;
    }
  }
`;

const LinkedInMenuLinks = styled.div`
  ${tw`flex border-r-[2px] border-gray-100 justify-around`}

  div:not(:last-child) {
  }
  div:last-child {
  }
`;
const RightNavigationDetails = styled.div`
  ${tw`flex items-center justify-end gap-2`}

  @media screen and (max-width: 1024px) {
    ${tw`hidden`}
  }
`;

const linkedInLinks = [
  {
    icon: <HiHome />,
    title: "Home",
    circle: true,
    active: true,
  },

  { icon: <HiUsers />, title: "My Network" },
  { icon: <MdWork />, title: "Jobs" },
  { icon: <RiMessage2Fill />, title: "Messaging" },
  { icon: <IoMdNotifications />, title: "Notifications", notification: true },
];

export const LinkedInNaviagtion = () => {
  const [formdata, setFormData] = useState("");

  return (
    <NavigationContainer>
      <div className="relative">
        <form
          className="flex gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setFormData("");
          }}
        >
          <BsLinkedin size={40} color="#0072b1" />
          <div className="relative w-full">
            <input
              type="text"
              name=""
              value={formdata}
              onChange={(e) => setFormData(e.target.value)}
              id=""
              className="bg-gray-100 h-[40px] w-[95%] md:w-full lg:w-[60%] lg:focus:w-[80%] transition-all ease-in-out duration-500 placeholder:text-black placeholder:opacity-50 pl-10 placeholder:text-lg focus:bg-blue-50"
              placeholder="search"
            />
            <span className="absolute left-[10px] top-2">
              <GrFormSearch size={25} />
            </span>
          </div>
        </form>

        {/* <SearchFormModal /> */}
      </div>

      <RightNavigation>
        <LinkedInMenuLinks>
          {linkedInLinks?.map((link, index): any => {
            return (
              <>
                <div
                  className={`relative flex flex-col items-center justify-center text-gray-500 hover:text-black transition-all ease-in-out duration-500 cursor-pointer ${
                    link.active && "underline text-black font-bold"
                  }`}
                  key={index}
                >
                  {link.circle ? (
                    <>
                      <span className="text-2xl">{link.icon}</span>
                      <span className="text-xs">{link.title}</span>
                      <div className="h-[12px] w-[12px] bg-red-500 rounded-full absolute left-3 top-[7px] flex items-center justify-center">
                        <span className="h-[5px] w-[5px] bg-white block rounded-full"></span>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl">{link.icon}</span>
                      <span className="text-xs font-medium">{link.title}</span>
                    </>
                  )}
                </div>
              </>
            );
          })}
          <div className="hover:text-black transition-all ease-in-out duration-500 cursor-pointer hover:font-medium">
            <img
              src="/assets/img/Bg-hero.png"
              alt="profile image"
              className="w-[30px] h-[30px] rounded-full"
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
          <div className="flex flex-col items-center hover:text-black transition-all ease-in-out duration-500 cursor-pointer hover:font-medium">
            <FcBusiness size={23} />
            <div className="flex items-center">
              <span className="font-light text-sm">For Business</span>
              <RiArrowDropDownFill />
            </div>
          </div>

          <div className="flex flex-col text-xs font-medium text-pink-500 underline">
            <a href="#">Get Hired Faster</a>
            <a href="#">Try Premium Free</a>
          </div>
        </RightNavigationDetails>
      </RightNavigation>
    </NavigationContainer>
  );
};
