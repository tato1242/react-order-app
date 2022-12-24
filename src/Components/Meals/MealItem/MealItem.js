import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; //${} to inject dynamic content   ToFIXED always renders 2 decimal nums

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="m-4 pb-4 text-left    ">
      <div>
        <h3 className="m-[1]">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-yellow-800 text-xl">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
