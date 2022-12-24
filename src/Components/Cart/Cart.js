import { useContext } from "react";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`; //2 because we always need 2 decimal places

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="m-0 p-0 overflow-auto max-h-[320px]">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      <div>
        {cartItems}
        <div className="flex justify-between items-center font-bold text-2xl m-2">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="text-right">
          <button
            onClick={props.onClose}
            className="bg-white border-yellow-900  rounded-3xl border-2  cursor-pointer p-2   text-orange-900 bg-white "
          >
            Close
          </button>
          {hasItems && (
            <button className="bg-orange-900 text-white  rounded-3xl border-2xl ml-3  p-2 border-yellow-900">
              Order
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
