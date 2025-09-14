
import './App.css';
import { useState } from 'react';


function App() {
  // const [counter,passing function which change value counter]=useState(value)
  let [counter,AtharvCounter]=useState(15)
  //let counter=15;
  const addValue = () =>{
   // counter=counter+1
   //before counter = 15 after prevCounter= 15+3 = 18
   // we cannot use counter+1 repeated for adding 2 or 3 in counter we have to 
   // pass new call back function in our state like prevCounter
   AtharvCounter(prevCounter => prevCounter+1)
   AtharvCounter(prevCounter => prevCounter+1)
   AtharvCounter(prevCounter => prevCounter+1)
  };
   const removeValue=()=>{
    //it does not work like that
    AtharvCounter(counter-1)
    AtharvCounter(counter-1)
   }
  return (
  //  ui(dom) updation ko react handle karta he 
     <div className='App'>
     <h1>code with Atharv</h1>
     <h2>Counter value:{counter}</h2>

     <button onClick={addValue}>Add value</button><br/>
     <button onClick={removeValue}>remove value</button>

      < FavoriteColor/> {/* passing another separate function in app */}
      < MyCar/>
      <MyCars/>
     </div>
    
     
  );
}
// change color name on click from w3 school

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <> 
    <div>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </div>
      
    </>
  );
}

// We could create multiple state Hooks to track individual values
function MyCar() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  );
}

// we can just use one state and include an object instead!

function MyCars() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  const bmwCar = ()=>{
    setCar({
      brand: "Bayerische Motoren Werke",
      model:"BMW M5 CS",
      year: "2004",
      color:"Black"
    });
  }

  return (
    <>
      <h1> {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={bmwCar}>BMW</button>
    </>
  )
}


export default App;

