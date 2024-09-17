import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="container flex flex-col items-center justify-between gap-5 py-8 mx-auto lg:flex-row lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>Food Recipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter Items..."
          className="p-3 px-8 rounded-full shadow-lg outline-none bg-white/75 lg:w-96 shadow-red-500 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black duration-300 hover:text-gray-700"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/favorites"}
            className="text-black duration-300 hover:text-gray-700"
          >
            favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
