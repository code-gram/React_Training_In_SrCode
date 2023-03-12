import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const orderIcecreamHandler = () => {
    dispatch(ordered());
  };
  const reStockIcecreamHandler = () => {
    dispatch(restocked(value));
  };
  const onChangeHandler = (event) => {
    setValue(parseInt(event.target.value));
  };
  return (
    <div>
      <h2>Number of Icecreams : {numOfIcecreams}</h2>
      <button onClick={orderIcecreamHandler}>Order Icecream</button>
      <input type="number" value={value} onChange={onChangeHandler} />
      <button onClick={reStockIcecreamHandler}>Restock Icecream</button>
    </div>
  );
};
