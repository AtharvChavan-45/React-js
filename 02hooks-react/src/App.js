
import './App.css';
import { useState } from 'react';


function App() {
  // const [counter,passing function which change value counter]=useState(value)
  let [counter,AtharvCounter]=useState(15)
  //let counter=15;
  const addValue = () =>{
   // counter=counter+1
   AtharvCounter(counter+1)
  };
   const removeValue=()=>{
    AtharvCounter(counter-1)
   }
  return (
  //  ui(dom) updation ko react handle karta he 
     <div className='App'>
     <h1>code with Atharv</h1>
     <h2>Counter value:{counter}</h2>

     <button onClick={addValue}>Add value</button><br/>
     <button onClick={removeValue}>remove value</button>

     </div>
     
  );
}

export default App;
