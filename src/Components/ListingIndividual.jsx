import React from "react";
import HeaderIndividual from "./HeaderForListingIndividual";
import MainForIndividual from "./MainForIndividual";

function ListingIndividual() {
  return (
    <div className=" w-[98vw] flex justify-center">
      <div className=" w-[77vw] flex flex-col justify-center">
        <HeaderIndividual />
        <MainForIndividual />
      </div>
    </div>
  );
}

export default ListingIndividual;
