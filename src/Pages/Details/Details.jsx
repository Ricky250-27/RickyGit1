import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";

const Details = () => {
  const { id } = useParams();
  const { recDetails, setRecDetails, favoritesList, handleAddToFavorites } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getRecDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data) {
        setRecDetails(data?.data);
      }
    }
    getRecDetails();
  }, [id]);

  return (
    <div className="container grid grid-cols-1 gap-10 py-10 mx-auto lg:grid-cols-2">
      <div className="row-start-2 lg:row-start-auto">
        <div className="overflow-hidden h-96 rounded-xl group">
          <img
            src={recDetails?.recipe?.image_url}
            className="block object-cover w-full h-full duration-300 group-hover:scale-105"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-cyan-700">
          {recDetails?.recipe?.publisher}
        </span>
        <h3 className="text-2xl font-bold text-black truncate">
          {recDetails?.recipe?.title}
        </h3>

        <div>
          <button
            onClick={() => handleAddToFavorites(recDetails?.recipe)}
            className="inline-block p-3 px-8 mt-3 text-sm font-medium tracking-wider text-white uppercase bg-black rounded-lg shadow-md"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recDetails?.recipe?.id
            ) !== -1
              ? "remove from favorites"
              : "add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">Ingredients</span>
          <ul className="flex flex-col gap-3">
            {recDetails?.recipe?.ingredients.map((ingr) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {ingr.quantity} {ingr.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {" "}
                  {ingr.description}{" "}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
