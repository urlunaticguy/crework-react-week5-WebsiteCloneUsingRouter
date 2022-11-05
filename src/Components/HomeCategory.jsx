import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import ListingAll from "./ListingAll";
import Pagination from "./Pagination";

function HomeCategory() {
  const { cat } = useParams();
  const multiplier = parseInt(cat) + 1;
  return (
    <div className=" w-[98vw] flex justify-center">
      <div className=" w-[87vw] flex flex-col justify-center">
        <Header />
        <Pagination />
        <ListingAll
          startIndex={12 * multiplier}
          endIndex={12 * (multiplier + 1)}
        />
      </div>
    </div>
  );
}

export default HomeCategory;
