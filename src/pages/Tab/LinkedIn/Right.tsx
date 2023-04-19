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
    <div className="self-start text-center bg-white">
      <div className="text-sm text-gray-300">Coming Soon...</div>
    </div>
  );
};
