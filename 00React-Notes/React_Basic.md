## Define React

React is a JavaScript library used to build fast, interactive user interfaces by creating reusable components and efficiently updating the UI using a virtual DOM.

- React is a javascript library for building user interfaces.
- React is used to build single-page application.
- React allows us to create reusable UI components.
- React was developed by the facebook software engineer jorden walke.

### What is virtual DOM ?

**DOM** : document object Module
        - Structure of your Webpage
        - Updating the real dom is slow
        - Even a small change can cause the page to re-render many elements.

**Virtual DOM** : 

Virtual DOM is a lightweight copy of the real DOM. It is fast and lives in memory.

whenever state or props changes -> React creates a new virtual DOM

1. Use Diffing Algorithm

React Compares -> old & new virtual dom -> to checks what exactly changed

2. Update Real DOM (Reconcillation)

React update only the changed element in the real dom (not the whole page), this makes rendering fast 

### what is JSX (javascript XML)

JSX allows you to write HTML-like code inside Javascript. Allow use of javascript expressions inside UI.

**Important Points** :
- JSX must have one parent element.
- Use className instead of class.
- In JSX we write javascript inside {}
```jsx
const name="Atharv";
return <h1>My name is {name}</h1>
- comment in JSX :
```jsx
 {/* This is a comment in JSX*/}
```
### Why react Components (JSX file Name) Start with Uppercase letters

In React, JSX files (and components names) are written with capital letters because React treats capitalized tags as custom components, while lowercase tags are treated as normal HTML elements.

Ex. <Header/> -> React thinks this is a components
    <header/> -> React thinks this is a HTML tags

### How JSX works Internally ?

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
- To pass more root Element we require to wrap all roots element in fragment or Div tag

```jsx
return(
    <h1>Hello</h1>
    <h2>How are you?</h2>
)
```
