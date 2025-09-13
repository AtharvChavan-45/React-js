
import './App.css';
import Card from './components/Card'
import AIAuthComponents from './components/AIAuthComponents';
import LoginPage from './components/LoginPage'
function App() {
  let myObj = {
    username:"Atharv",
    age:21
  }
  let newArr = [1,2,3];
  return (
    // passing object ,array and value by using props
    <>
    <div className=' flex flex-col items-center justify-center'>
        <h1 className='bg-green-400 text-black p-4 rounded-xl max-w-xs text-center '>Tailwind test</h1>
       < Card username='Atharv' btnText= "click me" />
       <Card someObj={myObj} newArray={newArr}/>
       < AIAuthComponents/>
       < LoginPage />
    </div>
    
     
    
  


    
    
    </>
  );
}

export default App;
