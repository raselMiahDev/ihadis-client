import React from "react";

const PolygonShape = (props) => {
  return (
    <div class=" w-10">
      <div class="inset-0 clip-polygon ">
        <div class="h-full w-full bg-gray-200 flex justify-center items-center hover:bg-green-700">
          <p class="text-white text-sm font-semibold">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default PolygonShape;
