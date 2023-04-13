import React, { useState, useContext } from "react";
import { HiPhoto } from "react-icons/hi2";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { SlEmotsmile } from "react-icons/sl";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";
import { ModalContext } from "../../../components/store/ModalContext";

const cardinfo = [
  {
    title: "Photo",
    icon: <HiPhoto />,
    background: "#dbe7e9",
    color: "#0a66c2",
  },
  {
    title: "Video",
    icon: <AiTwotoneVideoCamera />,

    background: "#fce2ba",
    color: "#8f5849",
  },
  {
    title: "Events",
    icon: <BsFillCalendarDateFill />,
    background: "#fadfd8",
    color: "#80597e",
  },
  {
    title: "More",
    icon: <FiMoreHorizontal />,

    background: "#f3f2ef",
    color: "#666",
  },
];

export const Modal = () => {
  const [disable, setDisable] = useState(true);
  const [text, setText] = useState("");
  const { handleModalOpening } = useContext(ModalContext);

  const handleChange = (e: any) => {
    setText(e.target.value);
    if (e.target.value.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleClick = () => {
    setText("");
    setDisable(true);
  };
  return (
    <>
      <div className="fixed top-0 left-0 min-h-screen w-full bg-black opacity-80 text-white  flex justify-center z-10"></div>

      <div className="w-full h-full flex items-center justify-center absolute left-0 z-[1000]">
        <div className="text-black min-h-[70%] w-[50%] bg-white rounded-lg">
          <div className="flex items-center justify-between text-xl pb-3 px-7 py-3">
            <p className=" text-black font-medium">Create a post</p>
            <span className="hover:bg-gray-200 px-2 py-2 hover:rounded-full transition-all ease-in-out duration-500 cursor-pointer">
              <AiOutlineClose onClick={handleModalOpening} />
            </span>
          </div>

          <div>
            <div className="flex items-center pt-7 gap-3 border-t-2 border-gray-200 px-7">
              <img
                src="/assets/img/Bg-hero.png"
                alt=""
                className="w-[45px] h-[45px] rounded-full"
              />
              <div className="">
                <h1 className="font-bold"> Olúwáṣeun Oyèwọlé</h1>
                <div className="flex items-center gap-2 border-2 border-gray-300 rounded-full justify-center py-1">
                  <BsGlobeCentralSouthAsia />
                  <span className="text-sm text-gray-500">Anyone</span>
                  <MdOutlineArrowDropDown size={25} />
                </div>
              </div>
            </div>
            <div className="px-7 py-4">
              <textarea
                rows={3}
                className="placeholder:text-lg font-Quicksand p-5 focus:border-none focus:outline-none w-full text-xl"
                placeholder="What do you want to talk about?"
                onChange={handleChange}
                value={text}
              />
            </div>

            <div className="px-7 border-b-2 border-gray-200 ">
              <span>
                <SlEmotsmile className="text-gray-800 ml-5 text-2xl" />
              </span>

              <div className="flex gap-2 py-5 ">
                {cardinfo?.map((card): any => {
                  return (
                    <>
                      <div
                        className="flex flex-col items-center justify-center h-[150px] w-[110px] rounded-xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 hover:shadow-2xl gap-3"
                        style={{
                          background: card.background,
                        }}
                      >
                        <div className="text-xl">
                          <span
                            className={`h-[50px] w-[50px] flex items-center justify-center rounded-full`}
                            style={{
                              background: card.color,
                              color: "white",
                            }}
                          >
                            {card.icon}
                          </span>
                        </div>
                        <span
                          className="text-sm font-bold"
                          style={{ color: card.color }}
                        >
                          {" "}
                          {card.title}
                        </span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="px-7 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-500 px-3 py-1 hover:bg-gray-200 hover:rounded-full transition-all ease-in-out duration-500 cursor-pointer">
                <span>
                  <BiMessageDots />
                </span>
                Anyone
              </div>
              <div className="flex items-center gap-3">
                <BsClock className="text-xl text-gray-700" />
                <button
                  className={`bg-gray-200 px-5 py-1 text-gray-500 rounded-full disabled:cursor-not-allowed enabled:cursor-pointer enabled:bg-linkedin enabled:text-white`}
                  disabled={disable}
                  onClick={handleClick}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
