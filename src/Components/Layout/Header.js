import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../Assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className=" box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25) fixed top-0 left-0 w-full h-20 bg-orange-900 text-white flex justify-between items-center p-0 z-10">
        <h1 className="mx-[50px]"> ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowcart} />
      </header>
      <div>
        <img
          className="w-full h-64 z-0 overflow-hidden origin-bottom -rotate-2 skew-x--3    "
          src={mealsImage}
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
