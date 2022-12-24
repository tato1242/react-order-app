import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-2">
      <label htmlFor={props.input.id} className="font-bold mr-4">
        {props.label}
      </label>
      <input
        ref={ref} // ????????????
        {...props.input} //chacks all the key value pairs
        className="w-12 rounded pl-2 rounded-lg"
      />
    </div>
  );
});

export default Input;
