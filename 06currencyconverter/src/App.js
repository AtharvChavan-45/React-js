
import { useState } from 'react';
import './App.css';
import {InputBox} from './components';
import useCurrencyInfo from './hooks/useCurrencyinfo';
function App() {
  const [amount,setAmount]=useState(0);
  return (
   <>
   <h1 className='text-3xl  m-4 text-center bg-slate-400'>Currency App</h1>
   < InputBox />
   </>
  );
}

export default App;
