import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  //useState is a hook used to manage the state which returns an array with exactly two elemebnts
  //the current state and state updating function
  //whenever the state changes the component is re-rendered i.e. here IngredientForm will re-run
  //useState will also be re-executed but
  //the state will survive the re-renders since React manages the state separately
  //the useState will manage the state separately so the value of the state won't be lost if re-rendered
  //const [inputState, setInputState] = useState({ title: "", amount: "" });

  //Managing multiple states independently is easier, so let's do this instead
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title, amount });
    setTitle("");
    setAmount("");
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              //this is harder approach
              // value={inputState.name}
              // onChange={(event) => {
              //   const enteredTitle = event.target.value;
              //   setInputState((prevState) => ({
              //     title: enteredTitle,
              //     amount: prevState.amount,
              //   }));
              // }}
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              // value={inputState.amount}
              // onChange={(event) => {
              //   //Notice how we have grabbed the event.target.value outside of the setInputState
              //   //if we had accessed the event.target.value inside setInputState for the amount
              //   //due to the closure property of JS we would have only gotten the value of the
              //   //first keystroke
              //   //React reuses the event objects does not recreate it for every keystroke
              //   const enteredAmount = event.target.value;
              //   setInputState((prevState) => ({
              //     title: prevState.title,
              //     amount: enteredAmount,
              //   }));
              // }}
              value={amount}
              onChange={(event) => {
                setAmount(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
