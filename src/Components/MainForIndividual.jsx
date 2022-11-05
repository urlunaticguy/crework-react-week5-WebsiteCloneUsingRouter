import React from "react";
import { useParams } from "react-router-dom";
import HomeListings from "../Utils/HomeListings";
import individualListingsData from "../Utils/IndividualListings";

function MainForIndividual() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const { id } = useParams();
  const dataHome = HomeListings[id];
  const dataInd = individualListingsData[id];
  const price = dataHome[4];
  const checkComma = price.indexOf(",");
  let price1 = 0;
  if (checkComma === 2) {
    price1 = (price.slice(0, 2) + price.slice(3)) * 5;
  } else if (checkComma === 1) {
    price1 = (price.slice(0, 1) + price.slice(2)) * 5;
  }
  let priceStr = "";
  const returnNumber = (numAsString) => {
    let num = String(numAsString);
    let ans = "";
    if (numAsString < 10000) {
      ans = num.slice(0, 1) + "," + num.slice(1);
    } else if (numAsString < 100000) {
      ans = num.slice(0, 2) + "," + num.slice(2);
    } else if (numAsString < 1000000) {
      ans = num.slice(0, 1) + "," + num.slice(1, 3) + "," + num.slice(3);
    }
    return ans;
  };

  priceStr = returnNumber(price1);

  let serviceFee = parseInt(0.06 * price1);
  let serviceFeeStr = returnNumber(serviceFee);

  let total = price1 + serviceFee;
  let totalStr = returnNumber(total);

  return (
    <div className=" w-[100%] mt-[1rem]">
      <div className=" flex flex-col">
        <span className=" w-[100%] text-[1.7rem] font-semibold">
          {dataInd[0]}
        </span>
        <div className=" w-[100%] flex justify-between">
          <div className=" text-[0.8rem] font-semibold flex items-center">
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
            <span className=" ml-[0.2rem]">{dataHome[5][0] + " . "}</span>
            <span className=" ml-[0.3rem] mr-[0.4rem] text-[0.85rem] cursor-pointer underline">
              {dataHome[5][1] + " reviews"}
            </span>
            .
            <span className=" ml-[0.4rem] text-[0.85rem] cursor-pointer underline">
              {dataInd[1]}
            </span>
          </div>
          <div className=" flex gap-2">
            <div className=" p-2 cursor-pointer flex gap-2 rounded-full hover:bg-[#f4f1f1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[1.1rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
              <span className=" text-[0.85rem] underline font-semibold">
                Share
              </span>
            </div>
            <div className=" p-2 cursor-pointer flex gap-2 rounded-full hover:bg-[#f4f1f1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[1.1rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span className=" text-[0.85rem] underline font-semibold">
                Save
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-[1rem] w-[100%] h-[28rem] gap-x-2 flex">
        <div className=" cursor-pointer w-[50%] h-[100%]">
          <img
            className=" rounded-l-xl hover:opacity-95 w-[100%] h-[28rem] object-cover"
            src={dataHome[0]}
          />
        </div>
        <div className=" cursor-pointer w-[50%] flex gap-x-[0.5rem] gap-y-[0.5rem] flex-wrap">
          <img
            className=" hover:opacity-95 w-[49%] h-[13.75rem]"
            src={dataInd[2]}
          />
          <img
            className=" rounded-tr-xl hover:opacity-95 w-[49%] h-[13.75rem]"
            src={dataInd[3]}
          />
          <img
            className=" hover:opacity-95 w-[49%] h-[13.75rem]"
            src={dataInd[4]}
          />
          <img
            className=" rounded-br-xl hover:opacity-95 w-[49%] h-[13.75rem]"
            src={dataInd[5]}
          />
        </div>
      </div>
      <div className=" w-[100%] mt-[2.2rem] flex">
        <div className=" w-[68%] flex flex-col">
          <div className=" text-[1.5rem] font-semibold">{dataInd[6]}</div>
          <div className=" text-slate-700">{dataInd[7]}</div>
          <div className=" w-[85%] flex flex-col gap-6 mt-[2rem] py-[2rem] border-y-2 border-slate-200">
            <div className=" flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[2rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
              <div className=" flex flex-col ml-[1rem]">
                <span className=" font-semibold">Self check-in</span>
                <span className=" text-[#8f8f8f]">
                  Check yourself in with the lockbox
                </span>
              </div>
            </div>
            <div className=" flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[2rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div className=" flex flex-col ml-[1rem]">
                <span className=" font-semibold">Great location</span>
                <span className=" text-[#8f8f8f]">
                  100% of recent guests gave the location a 5-star rating.
                </span>
              </div>
            </div>
            <div className=" flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[2rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <div className=" flex items-center justify-center ml-[1rem]">
                <span className=" font-semibold">
                  Free cancellation for 48 hours.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[85%] mt-[1rem] flex flex-col pb-[1rem] border-b-2 border-slate-200">
            <div className=" text-[2rem] font-bold">
              <span className=" text-[#fd3a5c]">air</span>
              <span>cover</span>
            </div>
            <span className=" mt-[0.5rem]">
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </span>
            <div className=" mt-[0.5rem] underline font-semibold">
              Learn more
            </div>
          </div>
          <div className=" w-[85%] mt-[1rem] mb-[3rem] flex flex-col pb-[1rem] border-b-2 border-slate-200">
            <span className=" text-[1.5rem] font-semibold">
              Where you'll sleep
            </span>
            <img
              className=" cursor-pointer my-[1.2rem] w-[20rem] h-[13rem] object-cover rounded-xl"
              src={dataInd[8]}
            />
            <span className=" font-semibold">Bedroom area</span>
            <span className=" text-[0.9rem] font-normal">1 queen bed</span>
          </div>
        </div>
        <div className=" w-[32%] flex flex-col">
          <div className=" px-[1.5rem] py-[2rem] flex flex-col rounded-xl shadow-xl shadow-slate-300 mt-[1rem] w-[100%] h-[32rem] border-[1px] border-slate-300">
            <div className=" flex justify-between items-end">
              <div>
                <span className=" text-[1.3rem] font-semibold">
                  ₹{dataHome[4]}
                </span>
                <span className=" text-slate-700"> night</span>
              </div>
              <div className=" flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[0.9rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <span className=" font-bold text-[0.8rem]">
                  {dataHome[5][0]}
                </span>
                <span>{"-"}</span>
                <span className=" cursor-pointer underline text-[0.85rem]">
                  {dataHome[5][1]} reviews
                </span>
              </div>
            </div>
            <div className=" cursor-pointer flex flex-col mt-[1rem] w-[100%] h-[7rem] rounded-xl border-[1px] border-slate-400">
              <div className=" flex w-[100%] min-h-[3.5rem] items-center">
                <div className=" w-[50%] h-[100%] flex flex-col justify-center pl-[0.6rem] border-r-[1px] border-slate-400">
                  <span className=" text-[0.65rem] font-bold">CHECK-IN</span>
                  <span className=" text-[0.9rem] text-slate-800">
                    12/12/2022
                  </span>
                </div>
                <div className=" w-[50%] flex flex-col pl-[0.6rem]">
                  <span className=" text-[0.65rem] font-bold">CHECKOUT</span>
                  <span className=" text-[0.9rem] text-slate-800">
                    12/17/2022
                  </span>
                </div>
              </div>
              <div className=" flex items-center justify-between w-[100%] h-[3.5rem] border-t-[1px] border-slate-400">
                <div className=" flex flex-col pl-[0.6rem]">
                  <span className=" text-[0.65rem] font-bold">GUESTS</span>
                  <span className=" text-[0.9rem] text-slate-800">1 guest</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.7}
                  stroke="currentColor"
                  className="w-[1.8rem] pr-[0.6rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div className=" cursor-pointer hover:bg-[#ce094e] flex items-center justify-center text-white font-semibold mt-[1rem] h-[3rem] w-[100%] rounded-lg bg-[#e21a5f]">
              Reserve
            </div>
            <div className=" mt-[0.7rem] w-[100%] flex items-center justify-center text-[0.9rem] text-slate-800">
              You won't be charged yet
            </div>
            <div className=" text-slate-700 mt-[1rem] gap-[1rem] w-[100%] flex flex-col">
              <div className=" flex justify-between">
                <span className=" cursor-pointer underline">
                  ₹{dataHome[4]} × 5 nights
                </span>
                <span>₹{priceStr}</span>
              </div>
              <div className=" flex justify-between">
                <span className=" cursor-pointer underline">Cleaning fee</span>
                <span>₹{serviceFeeStr}</span>
              </div>
              <div className=" flex justify-between">
                <span className=" cursor-pointer underline">Service fee</span>
                <span>₹0</span>
              </div>
              <div className=" mt-[0.5rem] pt-[1.5rem] flex justify-between border-t-[1px] border-slate-400">
                <span className=" font-semibold">Total before taxes</span>
                <span className=" font-semibold">₹{totalStr}</span>
              </div>
            </div>
          </div>
          <div className=" mt-[2rem] w-[100%] flex items-center justify-center gap-[0.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#e21a5f"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#e21a5f"
              className="w-[1.2rem] cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
            <span className=" cursor-pointer text-[#e21a5f] underline text-[0.9rem]">
              Report this listing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainForIndividual;
