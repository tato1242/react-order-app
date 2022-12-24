const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center">
      <div>
        <h2 className="text-gray-800 m-[4px]">{props.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-bold text-orange-900">{price}</span>
          <span className=" border-yellow-900  rounded-3xl border-2  font-bold rounded-md text-gray-800 border-[1px solid] p-[4px]">
            {props.amount}
          </span>
        </div>
      </div>
      <div>
        <button
          className=" border-yellow-900  rounded-3xl border-2  font-bold text-xl text-orange-900 w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1"
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className="border-yellow-900  rounded-3xl border-2  font-bold text-xl text-orange-900 w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
