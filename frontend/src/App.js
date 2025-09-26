
import React,{useEffect,useState} from "react";
import axios from 'axios';


function App() {
  const [msg,setMsg] = useState('loading...');
  useEffect(()=>{
    const base = process.env.REACT_APP_API_URL ?? '';
    axios.get(`${base}/api/ping`)
    .then(res => setMsg(res.data.message || 'ok'))
    .catch(err => setMsg('error:' + err.message));

  },[]);
  return (
    <div style={{padding:20}}>
      <h1>React + Backend</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
