//React is an open-source JavaScript library which is used for building user interfaces especially for single page applications (SPA) .
//Created by a Facebook engineer named Jordan Walke.
//React is all about components
//Components help for reusability and separation of concerns

//We write code in a declarative component based way
//Define the desired target states and let React figure out the actual JS DOM instructions

//Features of React
//JSX - JavaScript Syntax Extension
//It uses VirtualDOM instead of RealDOM
//React keeps lightweight representation of the real DOM in the memory known as the VDOM.
//RealDOM manipulations are expensive
//When the state of the object changes, VDOM changes only that object in the real DOM instead of updating all the objects.
//When the state of the object changes, VDOM gets updated. The react application that compares the previous state and then updates only those objects in real DOM
//instead of updating all the objects.
//Supports server-side rendering
//Follows unidirectional data flow or data binding
//Uses reusable/composable UI components to develop view.

//JSX
//JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. We can write HTML structures with JavaScript
//code.
import React from "react";
const React_Refresher = () => {
  //This is JSX
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default React_Refresher;

