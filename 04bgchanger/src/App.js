import { useState} from "react"

function App() {
  const [color,setColor] = useState("olive")
  return (
    
    <div className="w-full duration-100 h-screen "
      style= {{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full shadow-lg font-bold " style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full shadow-lg font-bold " style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full shadow-lg font-bold " style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full shadow-lg font-bold " style={{backgroundColor:"orange"}}>orange</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full shadow-lg font-bold " style={{backgroundColor:"yellow"}}>yellow</button>
          </div>
        </div>
    </div>
    
  );
}

export default App;
