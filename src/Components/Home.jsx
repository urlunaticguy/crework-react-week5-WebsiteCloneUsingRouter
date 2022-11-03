import React from "react";
import Header from "./Header";
import ListingAll from "./ListingAll";
import Pagination from "./Pagination";

function Home() {
  return (
    <div className=" w-[100vw] flex justify-center">
      <div className=" w-[89vw] flex flex-col justify-center">
        <Header />
        <Pagination />
        <ListingAll />
      </div>
    </div>
  );
}

export default Home;