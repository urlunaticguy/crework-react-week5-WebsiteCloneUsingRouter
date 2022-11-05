import React, { useRef } from "react";
import { Link } from "react-router-dom";
import paginationPics from "../Utils/paginationPics";

function Pagination() {
  const divRef = useRef(null);

  const scrollAmount = 100;

  const scrollClick = (element, a) => {
    setTimeout(() => {
      element.scrollLeft += a;
    }, 0);
  };

  return (
    <div className=" mt-[2rem] w-[100%] h-[4.5rem] flex items-center justify-center">
      {/* left chevron svg goes here */}
      <div
        onClick={() => {
          scrollClick(divRef.current, -scrollAmount);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={5}
          stroke="currentColor"
          className="w-[1.8rem] mt-[-1rem] mr-6 cursor-pointer hover:shadow-xl shadow-black rounded-full border-[1px] border-slate-300 p-[7px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      {/* main pagination div goes here */}
      <div
        ref={divRef}
        className=" w-[90%] flex gap-[3rem] overflow-x-auto overflow-y-hidden no-scrollbar"
      >
        {paginationPics.map((paginationItem, index) => (
          <Link
            to={"/categories/" + index}
            key={index}
            className=" border-b-[2px] hover:border-black cursor-pointer min-w-[auto] flex flex-col items-center justify-center"
          >
            <img className=" w-[1.6rem] h-[1.6rem]" src={paginationItem[0]} />
            <label className=" whitespace-nowrap cursor-pointer mt-[0.3rem] text-[0.75rem] text-slate-500 hover:text-black font-semibold mb-[0.5rem]">
              {paginationItem[1]}
            </label>
          </Link>
        ))}
      </div>

      {/* right chevron svg goes here */}
      <div
        onClick={() => {
          scrollClick(divRef.current, scrollAmount);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={5}
          stroke="currentColor"
          className="w-[1.8rem] mt-[-1rem] ml-4 cursor-pointer hover:shadow-xl shadow-black rounded-full border-[1px] border-slate-300 p-[7px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Pagination;
