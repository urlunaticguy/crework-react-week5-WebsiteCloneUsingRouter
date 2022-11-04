import React from "react";
import { Link } from "react-router-dom";

function ListingOnHome(props) {
  // making routing path like /listings/0
  const routingPath = "/listings/" + String(props.index);
  return (
    <Link to={routingPath} className=" flex flex-col w-[24%] cursor-pointer">
      <img
        className=" w-[100%] h-[18.5rem] rounded-[20px] object-cover"
        src={props.data[0]}
      />
      <div className=" w-[100%] flex justify-between mt-[0.5rem]">
        <label className=" cursor-pointer font-semibold text-[0.9rem]">
          {props.data[1]}
        </label>
        <div className=" flex gap-[0.2rem]">
          {/* this is star svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[1rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <label className=" cursor-pointer text-[0.9rem] text-slate-600">
            {props.data[5][0]} ({props.data[5][1]})
          </label>
        </div>
      </div>
      <label className=" cursor-pointer text-[0.9rem] text-slate-500">
        {props.data[2]}
      </label>
      <label className=" cursor-pointer text-[0.9rem] text-slate-500">
        {props.data[3]}
      </label>
      <label className=" cursor-pointer text-[0.9rem] font-semibold mt-[0.3rem]">
        {props.data[4]} <span className=" font-normal">night</span>
      </label>
    </Link>
  );
}

export default ListingOnHome;
