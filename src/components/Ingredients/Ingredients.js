import React, { useState, useCallback } from "react";
import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://react-hooks-practice-cc089-default-rtdb.firebaseio.com/ingredients.json"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((responseData) => {
  //       const loadedData = [];
  //       for (const key in responseData) {
  //         loadedData.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }
  //       setUserIngredients(loadedData);
  //     });
  // }, []);

  const filteredIngredients = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  }, []);

  const addIngredients = (ingredient) => {
    fetch(
      "https://react-hooks-practice-cc089-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const removeIngredients = (id) => {
    fetch(
      `https://react-hooks-practice-cc089-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      setUserIngredients((prevIngredients) =>
        prevIngredients.filter((item) => item.id !== id)
      );
    });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredients} />

      <section>
        <Search onFilteredIngredients={filteredIngredients} />
        {/* Need to add list here! */}
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredients}
        />
      </section>
    </div>
  );
};

export default Ingredients;
