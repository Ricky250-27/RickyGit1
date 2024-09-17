import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Context";
import RecipeName from "../../components/Recipe-list/RecipeName";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading please wait</div>;

  return (
    <div className="container flex flex-wrap justify-center gap-10 py-8 mx-auto">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeName item={item} />)
      ) : (
        <div>
          <p className="text-xl font-extrabold text-center text-black lg:text-4xl">
            Nothing else available here. Please search some other item{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
