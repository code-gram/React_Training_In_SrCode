import React, { useRef } from "react";
import Input from "../../ui/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value; // String
    const enteredAmountNumber = +enteredAmount; // Convert in int
    //console.log("-----SubmitHandler:MealItemForm-----");
    console.log(amountRef.current.value);
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          steps: 1,
          defaultValue: 1,
        }}
      />
      <button className={classes.button}>+Add</button>
    </form>
  );
};

export default MealItemForm;
