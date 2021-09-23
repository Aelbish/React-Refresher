import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const inputRef = useRef();
  const { onFilteredIngredients } = props;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTitle === inputRef.current.value) {
        const query =
          searchTitle.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${searchTitle}"`;
        fetch(
          "https://react-hooks-practice-cc089-default-rtdb.firebaseio.com/ingredients.json" +
            query
        )
          .then((response) => {
            return response.json();
          })
          .then((responseData) => {
            const loadedData = [];
            for (const key in responseData) {
              loadedData.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount,
              });
            }
            //when we execute the function below which was passed from Ingredients.js
            //we will update the state of the Ingredient.js file, which will re-execute Ingredients component
            //Hence, all the functions will be re-created in a different address
            //hence, this function inside this useEffect will re-run since onFilteredIngredients changed
            //And this cycle will continue for infinity
            //Hence, we will use useCallback
            onFilteredIngredients(loadedData);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTitle, onFilteredIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={searchTitle}
            onChange={(event) => {
              setSearchTitle(event.target.value);
            }}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
