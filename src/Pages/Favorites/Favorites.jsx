import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Context";
import RecipeName from "../../components/Recipe-list/RecipeName";

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="container flex flex-wrap justify-center gap-10 py-8 mx-auto">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeName item={item} />)
      ) : (
        <div>
          <p className="text-xl font-extrabold text-center text-black lg:text-4xl">
            Click on favorites icon to add recipes to your favorites list
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
