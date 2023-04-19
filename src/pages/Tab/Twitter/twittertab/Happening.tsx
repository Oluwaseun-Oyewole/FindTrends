import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGlobeAsiaAustralia, BsEmojiSmile } from "react-icons/bs";
import { GoFileMedia } from "react-icons/go";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { MdSchedule } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "../../../../components/Button";

const HappeningNowContainer = styled.div`
  ${tw`pt-5 hidden md:flex gap-3 w-full pb-2  border-b-[1px] border-gray-100 transition-all ease-in-out duration-500`}
  >img {
    flex-basis: 8%;
  }
  > div {
    flex-basis: 92%;
  }
`;
const HappeningNowImage = styled.img`
  ${tw`mt-1 w-[50px] h-[45px] lg:w-[40px] lg:h-[55px] rounded-full `}
`;
const HappeningNowHeading = styled.h1`
  ${tw` text-xl font-medium text-black`}
`;
const HappeningDropDown = styled.div`
  ${tw`flex items-center border-[1px] border-twitter rounded-2xl w-[20%] text-twitter pl-4 font-extrabold text-sm`}
`;
const HappeningDropDownParagraph = styled.p``;
const HappeningNowPararaph = styled.p`
  ${tw`text-twitter`}
`;
const HappeningNowContent = styled.div`
  ${tw`flex flex-col gap-5`}
`;
const GlobeContent = styled.div`
  ${tw`flex items-center gap-2 font-extrabold`}
`;

const MediaContainer = styled.div`
  ${tw`flex justify-between`}
`;
const HappeningMedia = styled.div`
  ${tw`flex items-center justify-between cursor-pointer`}
  >span {
    width: 40px;
    height: 40px;
    ${tw`hover:bg-blue-100 hover:rounded-full flex items-center justify-center transition-all duration-500 ease-in-out`}
  }
  span:last-child {
    ${tw`opacity-50`}
  }
`;

const TweetNumber = styled.div`
  ${tw`text-twitter text-center py-4 border-b-2 border-gray-100 hover:bg-gray-100 hover:cursor-pointer transition-all duration-500 ease-in-out`}
`;
export const HappeningNow = () => {
  const [click, setClick] = useState(false);
  const handleMouseEnter = () => {
    setClick(true);
  };
  return (
    <>
      <HappeningNowContainer
        onClick={handleMouseEnter}
        onMouseLeave={() => setClick(false)}
      >
        <HappeningNowImage src="/assets/img/pexel.jpg" />
        <HappeningNowContent>
          {click && (
            <HappeningDropDown>
              <HappeningDropDownParagraph>Everyone</HappeningDropDownParagraph>
              <RiArrowDropDownLine size={30} />
            </HappeningDropDown>
          )}
          <HappeningNowHeading>What's happening?</HappeningNowHeading>
          {click && (
            <GlobeContent>
              <BsGlobeAsiaAustralia color="#1DA1F2" />
              <HappeningNowPararaph>Everyone can reply</HappeningNowPararaph>
            </GlobeContent>
          )}
          <MediaContainer>
            <HappeningMedia>
              <span>
                <GoFileMedia color="#1DA1F2" size={20} />
              </span>
              <span>
                <AiOutlineFileGif color="#1DA1F2" size={20} />
              </span>
              <span>
                <BiPoll color="#1DA1F2" size={20} />
              </span>
              <span>
                <BsEmojiSmile color="#1DA1F2" size={20} />
              </span>
              <span>
                <MdSchedule color="#1DA1F2" size={20} />
              </span>
              <span>
                <FaMapMarkerAlt color="#1DA1F2" size={20} />
              </span>
            </HappeningMedia>
            <Button
              children="Tweet"
              onClick={() => null}
              background="#1DA1F2"
              padding={true}
              paddingvalues="6px 23px"
              opacity={true}
            />
          </MediaContainer>
        </HappeningNowContent>
      </HappeningNowContainer>
      <TweetNumber>Show 700 Tweets</TweetNumber>
    </>
  );
};
