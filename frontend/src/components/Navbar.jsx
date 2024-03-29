import { useState, useCallback } from "react";
import { NavItems } from ".";
import { useSmoothScrollTo } from "../hooks";
import "../styles/Navbar.css";
const Navbar = () => {
  const handleScrollToTop = useSmoothScrollTo(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleBrandClick = useCallback(() => {
    handleScrollToTop();
  }, [handleScrollToTop]);

  return (
    <div className="navbar fixed bg-base-100 flex-row-reverse lg:flex-row backdrop-blur-xl">
      <div className="flex-1 justify-end lg:justify-start">
        <h1
          className="btn btn-ghost disabled normal-case text-xl text-secondary logo"
          onClick={handleBrandClick}
        >
          Saiyan Prints
        </h1>
      </div>
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal p-0">
          <NavItems setIsVisible={setIsVisible} />
        </ul>
      </div>
      <div className="dropdown" onClick={() => setIsVisible(!isVisible)}>
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        {isVisible && (
          <ul className="menu menu-compact lg:hidden mt-3 p-2 shadow bg-base-100 w-40 z-30">
            <NavItems setIsVisible={setIsVisible} />
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
