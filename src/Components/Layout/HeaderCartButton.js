import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //raduce allows us to transform array into single object

  return (
    <button
      onClick={props.onClick}
      className="mx-[50px] rounded px-[50px] border-none  p-3 cursor-pointer bg-red-900 text-white hover:bg-black p-px-1px .rounded-3xl flex justify-around items-center font-bold "
    >
      <span className="w-5 h-5 mr-2">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-orange-700 p-1 ml-5 font-bold rounded-3xl">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
