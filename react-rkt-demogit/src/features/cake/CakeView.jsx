import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  //useSelector work as a mapStateToProps [Connector for component], that will fetch only relevant data on component
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  const orderCakeHandler = () => {
    dispatch(ordered());
  };

  const restockCakeHandler = () => {
    dispatch(restocked(value));
  };
  const onChangeHeander = (event) => {
    setValue(parseInt(event.target.value));
  };
  return (
    <div>
      <h2>Number of Cakes :{numOfCakes}</h2>
      <button onClick={orderCakeHandler}>Order Cake</button>
      <input type="number" value={value} onChange={onChangeHeander} />
      <button onClick={restockCakeHandler}>Restock Cakes</button>
    </div>
  );
};
