import React from "react";
import ListingOnHome from "./ListingOnHome";
import HomeListings from "../Utils/HomeListings";

function ListingAll(props) {
  const arr = HomeListings.slice(props.startIndex, props.endIndex);
  return (
    <div className=" mt-[1.3rem] mb-[1.5rem] w-[100%] h-auto flex flex-wrap items-center justify-between gap-y-9">
      {arr.map((HomeListItem, index) => (
        <ListingOnHome data={HomeListItem} index={index + props.startIndex} />
      ))}
    </div>
  );
}

export default ListingAll;
