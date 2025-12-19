# How to Create React App

1. First check npm and node is Install or not
```
 node -v 
 npm -v
```
2. Command for To create react app using npx (node package executer)
```
- npx create-react-app my-app
- cd my-app
- npm start
```
3. Command for to create react app using vite
```
- npm create vite@latest my-app
- cd my-app
- npm install
- npm run dev
```
# How to add tailwind css in React app

1. Install tailwind css
```
npm install tailwindcss @tailwindcss/vite
```
2. Add the @tailwindcss/vite plugin to your Vite configuration (vite.config.ts)
```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
3. Import tailwind css in index.css
```ts
@import "tailwindcss";
```

# Install Require Dependency For Frontend

### React Router Dom :
We install React Router DOM to enable client-side routing, allowing a React app to navigate between different pages (components) without reloading the browser.
```
npm install react-router-dom
```
### Redux :
1. **Redux Toolkit** : It simplifies Redux setup by providing built-in tools for creating stores, reducers, actions, and handling async logic.
```
npm install @reduxjs/toolkit
```
2. **React Redux** : It connects Redux with React components so components can access and update global state.
```
npm install react-redux
```




