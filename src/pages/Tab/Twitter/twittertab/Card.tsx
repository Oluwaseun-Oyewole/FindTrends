import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FiMoreHorizontal, FiMessageCircle } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { MdViewCompact } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";

const TwitterCardContainer = styled.div`
  ${tw`pt-4`}
`;
const TwitterCardHeading = styled.h1`
  ${tw`font-bold text-black`}
`;
const TwitterCardLink = styled.div``;
const TwitterCardLinks = styled.div`
  ${tw`pt-1 pb-3 text-twitter`}
`;
const TwitterImage = styled.img`
  ${tw`w-[45px] h-[40px] rounded-full`}
`;
const TwitterTime = styled.span``;
const TwitterCardDescription = styled.p`
  ${tw`text-sm py-2 text-black`}
`;
const TwitterLink = styled.p``;
const TwitterParagraph = styled.p`
  ${tw`text-black text-sm pb-2`}
`;
const TwitterCardContent = styled.div`
  ${tw``}
`;

const Twitter = styled.div`
  ${tw`flex gap-5 border-b-[1px] border-gray-200 pt-3 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out relative`}
`;

const TwitterHeaderFlex = styled.div`
  ${tw`flex justify-between items-center`}
`;

const TwitterHeaderFlexContainer = styled.div`
  ${tw`flex gap-2`}
`;

const TweetDetails = styled.div`
  ${tw`py-2 flex justify-between w-[80%]`}
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
`;

const TweetDetail = styled.div`
  ${tw`flex items-center gap-3 cursor-pointer`}
`;
export const TwitterCard = ({ details }: any) => {
  const [showModal, setShowModal] = useState(false);

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
          const handleShowModal = () => {
            if (id === index) {
              setShowModal(false);
            } else {
              setShowModal(false);
            }
          };

          return (
            <Twitter>
              <TwitterImage
                src="/assets//img/pexel.jpg"
                onMouseEnter={() => {
                  handleShowModal();
                }}
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
                    <>
                      <TwitterCardLinks>
                        <TwitterLink>{data.link}</TwitterLink>

                        <TwitterLink>{data.link1}</TwitterLink>

                        <TwitterLink>{data.link2}</TwitterLink>
                      </TwitterCardLinks>
                    </>
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

              {showModal && id === index && (
                <div className="p-5 card absolute bg-white shadow-2xl min-h-[270px] w-[320px] top-[300px] left-[250px] z-10 rounded-xl hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out">
                  <div>
                    <div className="flex items-center justify-between">
                      <img
                        src="/assets/img/pexel.jpg"
                        alt=""
                        className="w-[50px] rounded-full h-[50px] "
                      />
                      <h1 className="border-2 border-gray-200 px-5 py-1 text-black text-sm rounded-3xl">
                        Following
                      </h1>
                    </div>
                    <p className="font-bold text-black">Da Vinci of Design</p>
                    <p className="text-sm">@Mercee__</p>
                    <p className="py-3 text-sm">
                      Product Designer @getallvapp || Crafting purposeful design
                      that elevates user experience
                    </p>

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
            </Twitter>
          );
        }
      )}
    </TwitterCardContainer>
  );
};
