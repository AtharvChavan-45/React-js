<h1><span style="color:#FFE5B4"> Define React</span></h1>

-> React is a JavaScript library used to build fast, interactive user interfaces by creating reusable components and efficiently updating the UI using a virtual DOM.

- React is a javascript library for building user interfaces.
- React is used to build single-page application.
- React allows us to create reusable UI components.
- React was developed by the facebook software engineer jorden walke.


<h1><span style="color:#FFE5B4"> What is virtual DOM ?</span></h1>


<h3><span style="color:#93C572"> DOM (document object Module)</span></h3>

 - Structure of your Webpage
 - Updating the real dom is slow
 - Even a small change can cause the page to re-render many elements.

<h3><span style="color:#93C572"> Virtual DOM</span></h3>

- Virtual DOM is a lightweight copy of the real DOM. It is fast and lives in memory.

- whenever state or props changes -> React creates a new virtual DOM


<h4><span style="color:pink"> 1. Use Diffing Algorithm</span></h4>

React Compares -> old & new virtual dom -> to checks what exactly changed.

<h4><span style="color:pink"> 2. Update Real DOM (Reconcillation)</span></h4>


React update only the changed element in the real dom (not the whole page), this makes rendering fast.

<h1><span style="color:#FFE5B4">  what is JSX (javascript XML)</span></h1>


JSX allows you to write HTML-like code inside Javascript. Allow use of javascript expressions inside UI.


<h4><span style="color:pink"> Important Points</span></h4>

- JSX must have one parent element.
- Use className instead of class.
- In JSX we write javascript inside {}

```jsx
const name="Atharv";
return <h1>My name is {name}</h1>
```
- comment in JSX :
```jsx
 {/* This is a comment in JSX*/}
```

<h1><span style="color:#FFE5B4">  Why react Components (JSX file Name) Start with Uppercase letters</span></h1>

In React, JSX files (and components names) are written with capital letters because React treats capitalized tags as custom components, while lowercase tags are treated as normal HTML elements.

Ex.
```js
<Header/> //-> React thinks this is a components
<header/> //-> React thinks this is a HTML tags
```

<h1><span style="color:#FFE5B4">How JSX works Internally ?  </span></h1>

Browser cannot understand JSX directly. so JSX is converted into normal JavaScript using **Babel (a compiler)**

EX.
```jsx
{/* JSX form*/}
<h1>Hello</h1>

{/* JavaScript form*/}
React.createElement('h1',null,'hello');
```
- JSX Must have one root element means return only one components.

```jsx
return(
    <h1>Hello</h1>
)
```
- To pass more root Element we require to wrap all roots element in **fragment or Div tag**

```jsx
return(
    <h1>Hello</h1>
    <h2>How are you?</h2>
)
```
