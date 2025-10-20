import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
            .then((res)=>res.json()) // convert data into json file
            .then((res)=>setData(res[currency])), // take only currency value from api
            console.log(data)
        )
    },[currency]) // call when change in currency 
    return data
}
export default useCurrencyInfo;