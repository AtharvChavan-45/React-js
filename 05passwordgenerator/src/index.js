import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mongoose from "mongoose";
import { DB_NAME } from './constants';

//import express from "express"
//const app = express()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
// approch one

;(async() => {
  try{
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("Error:", error);
      throw error
    })

    app.listen(process.env.PORT,()=>{
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  }
  catch(error){
      console.error("ERROR",error)
      throw err
  }
})()
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
