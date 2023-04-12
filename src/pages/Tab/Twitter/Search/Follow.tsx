import React from "react";
import { GoVerified } from "react-icons/go";

export const Follow = () => {
  return (
    <>
      <div className="relative mt-8 bg-gray-50 shadow-xl rounded-xl p-3">
        <h1 className="text-xl text-black py-3 font-extrabold">
          Who to follow
        </h1>

        <div className="flex justify-between pb-5 cursor-pointer hover:bg-gray-200 p-2 items-center transition-all ease-in-out duration-500">
          <div className="flex gap-2">
            <img
              src="/assets/img/Bg-hero.png"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h2 className="text-black font-bold">Isreal Adesanya</h2>
                <GoVerified className="text-twitter" />
              </div>
              <p className="text-sm">@stylebender</p>
            </div>
          </div>
          <button className="bg-black text-white rounded-3xl text-sm w-[85px] h-[32px] hover:opacity-70 transition-all ease-in-out duration-500">
            Follow
          </button>
        </div>

        <div className="flex justify-between pb-5 cursor-pointer hover:bg-gray-200 p-2 items-center transition-all ease-in-out duration-500">
          <div className="flex gap-2">
            <img
              src="/assets/img/Bg-hero.png"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h2 className="text-black font-bold">Isreal Adesanya</h2>
                <GoVerified className="text-twitter" />
              </div>
              <p className="text-sm">@stylebender</p>
            </div>
          </div>
          <button className="bg-black text-white rounded-3xl text-sm w-[85px] h-[32px] hover:opacity-70 transition-all ease-in-out duration-500">
            Follow
          </button>
        </div>

        <div className="flex justify-between pb-5 cursor-pointer hover:bg-gray-200 p-2 items-center transition-all ease-in-out duration-500">
          <div className="flex gap-2">
            <img
              src="/assets/img/Bg-hero.png"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h2 className="text-black font-bold">Isreal Adesanya</h2>
                <GoVerified className="text-twitter" />
              </div>
              <p className="text-sm">@stylebender</p>
            </div>
          </div>
          <button className="bg-black text-white rounded-3xl text-sm w-[85px] h-[32px] hover:opacity-70 transition-all ease-in-out duration-500">
            Follow
          </button>
        </div>

        <p className="text-twitter text-sm pb-5">Show more</p>
      </div>

      <div className=" flex gap-2 flex-col w-[90%] py-8 p-3">
        <div className="flex text-xs justify-between">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="flex text-xs justify-between">
          <p>Accessibility</p>
          <p>Ads info</p>
          <p>More ...</p>
        </div>

        <div className="text-sm">&copy;2023 Twitter, Inc.</div>
      </div>
    </>
  );
};
