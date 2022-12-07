import React from "react";
import ButtonFollow from "../ButtonFollow/ButtonFollow";
import MarkEmailReadSharpIcon from "@mui/icons-material/MarkEmailReadSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
const InformationUser = () => {
  return (
    <div className="mt-10 block ">
      <a href="link" className="m-0 p-0 font-normal font-medium">
        <div className="relative block ">
          <img
            className="h-20 w-20 rounded-full  "
            src="https://miro.medium.com/fit/c/110/110/1*C6KlQUX7cSZiV7VlS12Vyw.jpeg"
            alt="name"
          />
        </div>
      </a>
      <div className="mt-4 block"></div>
      <a href="#" className="mt-2">
        <h2 className="leading-4">
          <span>Kim Oanh</span>
        </h2>
      </a>

      <div className="mt-1.5 block text-sm"></div>

      <span>
        <a href="#" className="fw- leading-4 text-stone-700">
          10 Followews
        </a>
      </span>

      <div className=" mt-2  block"></div>

      <p className=" color leading-2 text-sm text-stone-700 ">
        My dream is beautiful and rich Staff writer, The New Yorker. Author of
        The Library Book, The Orchid Thief, and more…Head
      </p>

      <div className=" mt-4  block"></div>

      <div className="mb-10 flex ">
        <ButtonFollow
          isFollowed={false}
          textColorBefore={"text-white"}
          bgColorBefore={"bg-green-500"}
          textColorAfter={"text-green-500"}
          bgColorAfter={"rgb"}
          onClick={(state) => {}}
        />
        <button className="ml-2 block">
          <MarkEmailReadSharpIcon className="color h-9 w-9 rounded-full bg-green-500 fill-white p-1.5" />
        </button>
      </div>

      <div className="relative block">
        <span className="font-serif text-base font-normal text-stone-700">
          Following
        </span>
        <ul className="mt-4 mb-4 block p-0 ">
          <li className="flex items-center justify-between ">
            <a href="#" className="m-0 p-0 ">
              <div className="flex pr-2.5">
                <div className="block pr-3">
                  <div className="relative block">
                    <img
                      className="Class Properties box-border block h-5  w-5
                      rounded-full"
                      src="https://miro.medium.com/fit/c/25/25/1*AwBz4NW9_M45J-sBlmH-lA.png"
                      alt="name"
                    />
                    <div className="t-0 absolute block h-5 w-5 rounded-full"></div>
                  </div>
                </div>
                <p className="max-h-5 overflow-hidden break-all text-xs font-normal leading-5 text-stone-700">
                  Barack Obama
                </p>
              </div>
            </a>
            {/* icon ... */}
            <button className="m-0 p-1">
              <MoreHorizSharpIcon className="h-6 w-6 fill-gray-500" />
            </button>
          </li>
          <li className="flex items-center justify-between ">
            <a href="#" className="m-0 p-0 ">
              <div className="flex pr-2.5">
                <div className="block pr-3">
                  <div className="relative block">
                    <img
                      className="Class Properties box-border block h-5  w-5
                      rounded-full"
                      src="https://vuipet.com/wp-content/uploads/2021/04/cho-ngao.jpg"
                      alt="name"
                    />
                    <div className="t-0 absolute block h-5 w-5 rounded-full"></div>
                  </div>
                </div>
                <p className="max-h-5 overflow-hidden break-all text-xs font-normal leading-5 text-stone-700">
                  Ngao Ngo
                </p>
              </div>
            </a>
            {/* icon ... */}
            <button className="m-0 p-1">
              <MoreHorizSharpIcon className="h-6 w-6 fill-gray-500" />
            </button>
          </li>
          <li className="flex items-center justify-between ">
            <a href="#" className="m-0 p-0 ">
              <div className="flex pr-2.5">
                <div className="block pr-3">
                  <div className="relative block">
                    <img
                      className="Class Properties box-border block h-5  w-5
                      rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvCXlsGbZF6QW-J71lgodxenNVCTPkJUi9Q&usqp=CAU"
                      alt="name"
                    />
                    <div className="t-0 absolute block h-5 w-5 rounded-full"></div>
                  </div>
                </div>
                <p className="max-h-5 overflow-hidden break-all text-xs font-normal leading-5 text-stone-700">
                  Ngao Ngu
                </p>
              </div>
            </a>
            {/* icon ... */}
            <button className="m-0 p-1">
              <MoreHorizSharpIcon className="h-6 w-6 fill-gray-500" />
            </button>
          </li>
        </ul>
      </div>
      <span className="absolute mt-5 cursor-pointer font-normal text-stone-700 ">
        See all
      </span>
    </div>
  );
};

export default InformationUser;
