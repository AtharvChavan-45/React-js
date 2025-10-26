
import { useState } from 'react';

import {InputBox} from './components';
import useCurrencyInfo from './hooks/useCurrencyinfo';
function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd")
  const [to,setTo] =useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo =useCurrencyInfo(from)
  const ratesObject = currencyInfo[from] || {};
  const options =Object.keys(ratesObject)
  const swap = () => {
    
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    // Ensure the rates object exists and has the 'to' currency before conversion
    const rate = currencyInfo[to];
    if (rate !== undefined) {
      setConvertedAmount(amount * rate);
    } else {
      console.error(`Rate for ${to} not found.`);
      setConvertedAmount(0);
    }
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://www.investopedia.com/thmb/ASStR21rMu9-9_nj1x07H83zbUs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-stock-market-data-on-digital-display-1058454392-c48e2501742f4c21ad57c25d6a087bd0.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
