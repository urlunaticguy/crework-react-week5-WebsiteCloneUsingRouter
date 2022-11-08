import React from "react";
import Header from "./Header";
import ListingAll from "./ListingAll";
import Pagination from "./Pagination";

function Home() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className=" w-[98vw] flex justify-center">
      <div className=" w-[87%] flex flex-col justify-center">
        <Header />
        <Pagination />
        <ListingAll startIndex={0} endIndex={12} />
      </div>
    </div>
  );
}

export default Home;
