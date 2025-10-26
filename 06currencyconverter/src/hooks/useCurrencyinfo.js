import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=>res.json()) // convert data into json file
            .then((res)=>{
                setData(res[currency]);
                console.log(res);
                 })
                 .catch((err) => console.error("Error fetching currency data:", err));
 
    },[currency]); // call when change in currency 
    return data;
}
export default useCurrencyInfo;