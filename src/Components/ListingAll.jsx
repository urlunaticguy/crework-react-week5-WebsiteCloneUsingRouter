import React from "react";
import ListingOnHome from "./ListingOnHome";
import HomeListings from "../Utils/HomeListings";

function ListingAll() {
  return (
    <div className=" mt-[1.3rem] w-[100%] h-auto flex flex-wrap items-center justify-between gap-y-9">
      {HomeListings.map((HomeListItem, index) => (
        <ListingOnHome data={HomeListItem} />
      ))}
    </div>
  );
}

export default ListingAll;
