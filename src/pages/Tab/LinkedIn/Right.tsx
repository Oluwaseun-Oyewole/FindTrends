import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import { IoIosMore } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

export const RightSection = () => {
  return (
    <div>
      <div className="self-start bg-white rounded-xl">
        <div className="p-4">
          <h2>Added to your feed</h2>
          <div className="mt-5 flex gap-3">
            <img
              src="/assets/img/pexels-omar-alnahi-18495.jpg"
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <div>
              <h3 className="text-black">Seun Oyewole</h3>
              <p className="text-xs text-gray-500 pb-2 font-medium">
                Frontend Developer with React and Typescript
              </p>
              <button className="border-2 border-gray-500 flex items-center justify-center w-[40%] py-[2px] rounded-full text-gray-600 font-medium hover:bg-gray-300 transition-all ease-in-out duration-500 hover:border-gray-700 hover:border-3 ">
                <AiOutlinePlus />
                Follow
              </button>
            </div>
          </div>

          <div className="mt-5 flex gap-3 ">
            <img
              src="/assets/img/pexels-omar-alnahi-18495.jpg"
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <div>
              <h3 className="text-black">Seun Oyewole</h3>
              <p className="text-xs text-gray-500 pb-2 font-medium">
                Frontend Developer with React and Typescript
              </p>
              <button className="border-2 border-gray-500 flex items-center justify-center w-[40%] py-[2px] rounded-full text-gray-600 font-medium hover:bg-gray-300 transition-all ease-in-out duration-500 hover:border-gray-700 hover:border-3">
                <AiOutlinePlus />
                Follow
              </button>
            </div>
          </div>
          <div className="mt-5 flex gap-3 pb-3">
            <img
              src="/assets/img/pexels-omar-alnahi-18495.jpg"
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <div>
              <h3 className="text-black">Seun Oyewole</h3>
              <p className="text-xs text-gray-500 pb-2 font-medium">
                Frontend Developer with React and Typescript
              </p>
              <button className="border-2 border-gray-500 flex items-center justify-center w-[40%] py-[2px] rounded-full text-gray-600 font-medium hover:bg-gray-300 transition-all ease-in-out duration-500 hover:border-gray-700 hover:border-3 ">
                <AiOutlinePlus />
                Follow
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-gray-700 text-sm flex items-center gap-1">
              View all recommendations
              <span className="text-lg">
                <AiOutlineArrowRight />
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-3 p-3 self-start bg-white rounded-xl">
        <div className="flex items-center justify-end gap-2">
          Ad
          <span>
            <IoIosMore />
          </span>
        </div>

        <p className="pt-2 text-xs text-gray-500 text-center px-5">
          {" "}
          Olúwáṣeun Oyèwọlé, reactivate your Premium free trial today!
        </p>
        <div className="flex items-center justify-center gap-4 py-3">
          <img
            src="/assets/img/pexels-omar-alnahi-18495.jpg"
            alt=""
            className="w-[70px] h-[70px] rounded-full"
          />
          <BsLinkedin color="" size={60} className="text-orange-400" />
        </div>
        <p className="pb-3 text-sm text-gray-600 text-center">
          See who's viewed your profile in the last 90 days
        </p>

        <div className="py-2 flex items-center justify-center">
          <button className="border-[1px] border-blue-700 rounded-full px-5 py-[5px] text-blue-700">
            Reactivate trial
          </button>
        </div>
      </div>

      <div className="py-5 text-xs text-gray-500 text-center">
        <div className="flex items-center justify-center gap-5">
          <p>About</p>
          <p>Accessibility</p>
          <p>Help Center</p>
        </div>

        <div className="py-2 flex items-center justify-center gap-5">
          <p>Privacy & Terms</p>
          <p>Ad Choices</p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <p>Advertising</p>
          <p>Business Services</p>
        </div>

        <div className="py-2 flex items-center justify-center gap-5">
          <p>Get the Linkedin app</p>
          <p>More</p>
        </div>

        <div className="py-5 flex items-center justify-center gap-2">
          <span>
            <BsLinkedin color="#0072b1" className="text-4xl" />
          </span>
          <p className="">LinkedIn Corporation 2023</p>
        </div>
      </div>
    </div>
  );
};
