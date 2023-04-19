import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FiMoreHorizontal, FiMessageCircle } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { MdViewCompact } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";
import { ContextProvider } from "../../../../components/context/ContextProvider";

const TwitterCardContainer = styled.div`
  ${tw`pt-4`}
`;
const TwitterCardHeading = styled.h1`
  ${tw`font-bold text-black`}

  @media screen and (max-width:400px) {
    ${tw`text-xs`}
  }
`;
const TwitterCardLink = styled.div`
  @media screen and (max-width: 400px) {
    ${tw`text-xs`}
  }
`;
const TwitterCardLinks = styled.div`
  ${tw`pt-1 pb-3 text-twitter`}

  @media screen and (max-width:400px) {
    ${tw`text-xs`}
  }
`;
const TwitterImage = styled.img`
  ${tw`w-[130px] h-[50px] md:w-[45px] md:h-[40px] rounded-full`}

  @media screen and (max-width:768px) {
    ${tw`w-[45px] h-[33px]`}
  }

  @media screen and (max-width: 500px) {
    ${tw`w-[100px] h-[45px]`}
  }

  @media screen and (max-width: 400px) {
    ${tw`w-[100px] h-[37px]`}
  }
`;

const TwitterCardDescription = styled.p`
  ${tw`text-sm py-2 text-black`}

  @media screen and (max-width:400px) {
    ${tw`text-sm`}
  }
`;
const TwitterLink = styled.p``;
const TwitterParagraph = styled.p`
  ${tw`text-black text-sm pb-2`}

  @media screen and (max-width:400px) {
    ${tw`text-sm`}
  }
`;
const TwitterCardContent = styled.div`
  ${tw``}
`;

const Twitter = styled.div`
  ${tw`flex gap-3 lg:gap-5 border-b-[1px] border-gray-200 pt-3 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out relative`}
`;

const TwitterHeaderFlex = styled.div`
  ${tw`flex justify-between items-center`}
`;

const TwitterHeaderFlexContainer = styled.div`
  ${tw`flex gap-2`}
`;

const TweetDetails = styled.div`
  ${tw`py-2 flex justify-between md:w-[80%]`}
  div > span {
    font-size: 13px;
  }
  > div:nth-child(1),
  div:nth-child(4),
  div:nth-child(5) {
    ${tw`hover:text-blue-500 transition-all duration-500 ease-in-out`}
    > span:first-child {
      ${tw`hover:bg-blue-200 rounded-full w-[30px] h-[30px] flex items-center justify-center`}
    }
    > span:last-child {
    }
  }

  > div:nth-child(2) {
    ${tw`hover:text-green-500 transition-all duration-500 ease-in-out`}
    > span:first-child {
      ${tw`hover:bg-green-200 rounded-full w-[30px] h-[30px] flex items-center justify-center`}
    }
    > span:last-child {
    }
  }

  > div:nth-child(3) {
    ${tw`hover:text-red-500 transition-all duration-500 ease-in-out`}
    > span:first-child {
      ${tw`hover:bg-red-200 rounded-full w-[30px] h-[30px] flex items-center justify-center`}
    }
    > span:last-child {
    }
  }

  @media screen and (max-width: 400px) {
    ${tw`text-xs`}
  }
`;

const TweetDetail = styled.div`
  ${tw`flex items-center md:gap-3 cursor-pointer`}

  @media screen and (max-width:400px) {
    ${tw`text-xs`}
  }
`;
export const TwitterCard = ({ details }: any) => {
  const { handleModalOpen, removeModal }: any = useContext(ContextProvider);

  return (
    <TwitterCardContainer>
      {details?.map(
        (
          {
            id,
            heading,
            title,
            username,
            time,
            description,
            links,
            content,
          }: any,
          index: any
        ) => {
          return (
            <Twitter onMouseEnter={removeModal} key={index}>
              <TwitterImage
                src="/assets/img/pexels-tima-miroshnichenko-5380661.jpg"
                onMouseEnter={handleModalOpen}
              />

              <TwitterCardContent>
                <TwitterHeaderFlex>
                  <TwitterHeaderFlexContainer>
                    <TwitterCardHeading>{heading}</TwitterCardHeading>
                    <TwitterCardLink>
                      {username}
                      {time}
                    </TwitterCardLink>
                  </TwitterHeaderFlexContainer>
                  <div className="hover:bg-blue-200 rounded-full p-2">
                    <FiMoreHorizontal />
                  </div>
                </TwitterHeaderFlex>

                <TwitterCardDescription>{description}</TwitterCardDescription>
                {links?.map((data: any, index: any) => {
                  return (
                    <div key={index}>
                      <TwitterCardLinks>
                        <TwitterLink>{data.link}</TwitterLink>

                        <TwitterLink>{data.link1}</TwitterLink>

                        <TwitterLink>{data.link2}</TwitterLink>
                      </TwitterCardLinks>
                    </div>
                  );
                })}
                <TwitterParagraph>{content}</TwitterParagraph>

                <TweetDetails>
                  <TweetDetail>
                    <span>
                      <FiMessageCircle size={20} />
                    </span>
                    <span>1</span>
                  </TweetDetail>

                  <TweetDetail>
                    <span>
                      <AiOutlineRetweet size={20} />
                    </span>
                    <span>6</span>
                  </TweetDetail>

                  <TweetDetail>
                    <span>
                      <BiLike size={20} />
                    </span>
                    <span>20</span>
                  </TweetDetail>

                  <TweetDetail>
                    <span>
                      <MdViewCompact size={20} />
                    </span>
                    <span>7000</span>
                  </TweetDetail>

                  <TweetDetail>
                    <span>
                      <BsFillShareFill size={15} />
                    </span>
                  </TweetDetail>
                </TweetDetails>
              </TwitterCardContent>
            </Twitter>
          );
        }
      )}
    </TwitterCardContainer>
  );
};
