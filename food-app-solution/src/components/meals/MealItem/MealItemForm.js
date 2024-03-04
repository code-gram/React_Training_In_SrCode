import React, { useRef, useState } from "react";
import Input from "./../../ui/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value; //string
    const enteredAmountNumber = +enteredAmount; // numeric

    //Checking form validation
    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    //You will call a function provided by MealItem, and MealItem component will
    // prepare complete data along with amount and call addItem.

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />

      <button>Add to cart</button>
      {!amountIsValid && <p>Please Enter Valid Amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
