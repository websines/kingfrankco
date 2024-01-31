import React from "react";
import CardComponent from "./CardComponent";

export default function ListSection() {
  const cardComponents = Array.from({ length: 20 }, (_, index) => (
    <CardComponent key={index} />
  ));

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl md:text-4xl font-semibold tracking-wide my-4">
          Brand New Bromptons for Sale in Singapore
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 my-4 gap-16">
          {cardComponents}
        </div>
      </div>
    </>
  );
}
