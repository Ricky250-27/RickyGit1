import React from "react";
import { Link } from "react-router-dom";

const RecipeName = ({ item }) => {
  return (
    <div className="flex flex-col gap-5 p-5 overflow-hidden border-white shadow-xl w-80 bg-white/75 boarder-2 rounded-2xl">
      <div className="flex items-center justify-center h-40 overflow-hidden rounded-xl">
        <img src={item?.image_url} alt="item" className="block w-full" />
      </div>
      <div>
        <span className="text-sm font-medium text-cyan-700">
          {item?.publisher}
        </span>
        <h3 className="text-2xl font-bold text-black truncate">
          {item?.title}
        </h3>
        <Link
          to={`recipe-item/${item?.id}`}
          className="inline-block p-3 px-8 mt-5 text-sm font-medium tracking-wider text-white uppercase bg-black rounded-lg shadow-md"
        >
          Recipe Detail
        </Link>
      </div>
    </div>
  );
};

export default RecipeName;
