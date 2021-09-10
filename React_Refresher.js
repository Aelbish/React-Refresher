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

//Element vs Component
//Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements
//in their props.
//Once an element is created it is never mutated.

const element = React.createElement("div", { id: "loginBtn" }, "Login");

const component = ({ onLogin }) => {
  <div id="loginBtn" onClick={onLogin}>
    Login
  </div>;
};

//Two ways of creating components
//1. Functional components
function Greeting({ message }) {
  return <h1>{`Hello ${message}`}</h1>;
}

//2. Class component
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello ${this.props.message}`}</h1>;
  }
}

//Pure Components
//React.PureComponent is same as React.Component except that it handles the shouldUpdateComponent() method for us. When props or state changes,
//PureComponent will do a shallow comparison on both props and state while the regular Component does not. 
//Hence, the component will re-render by default whenever we call shouldComponentUpdate

//State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to minimize the
//number of stateful components.
//State is like a variable in JS

//Updating state
//You should not update state directly because the component won't re-render

//Props
//Props are inputs to components. They are single values or objects containing a set of values that are passed to components.
//The data are passed from the parent component to a child component.
//Props are like function parameters in JS

//HTML event handling vs React event Handling
//onclick=doSomething() vs onClick={doSomething} inside doSomething we should always do event.preventDefault()





