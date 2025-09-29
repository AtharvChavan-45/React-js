import { useState,useCallback,useEffect,useRef} from 'react';

// Main App component
function App() {
  // State 1: Holds the desired length of the password (starts at 8)
  const [length,setlength] =useState(8)
  // State 2: Boolean flag to check if numbers are allowed in the password
  const [noAllowed,setnoAllowed] = useState(false);
  // State 3: Boolean flag to check if special characters are allowed in the password
  const [charAllowed,setcharAllowed]=useState(false);
  // State 4: Holds the generated password string
  const [password,setPassword] = useState("")
  
  // useref hook: used to create a reference to the input field so we can manipulate it (e.g., selecting the text)
  const passwordRef = useRef(null)

  // useCallback hook: caches the function to optimize performance. 
  // It only recreates this function if its dependencies ([length, noAllowed, charAllowed, setPassword]) change.
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    // Base characters (always included: lowercase and uppercase letters)
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // If 'Numbers Allowed' is checked, add digits to the character string
    if(noAllowed) str += "1234567890"
    // If 'Characters Allowed' is checked, add special symbols to the character string
    if(charAllowed) str +="!#$%&'*+,-./:;<=>?@[]_`{|}~"
    
    // Loop for the desired password length
    for (let i = 1; i <= length; i++) {
     // Generate a random index number within the available characters in 'str'
     let char = Math.floor(Math.random()*str.length)
      // Append the character at that random index to the 'pass' string
      pass += str.charAt(char)
    }

    // Update the state with the newly generated password
    setPassword(pass)
  },[length,noAllowed,charAllowed,setPassword])
  
  // useCallback hook: caches the function for copying
  const copyPasswordToClipboard =useCallback(()=>{
    // The '?' ensures this code only runs if passwordRef.current exists (optional chaining)
    // Selects the text inside the input field referenced by passwordRef
    passwordRef.current?.select()
    // Optional: Sets the selection range (e.g., selecting the first 3 characters)
   // passwordRef.current?.setSelectionRange(0,3)
    // Copies the password value to the user's system clipboard
    window.navigator.clipboard.writeText(password);
  },[password]) // Dependency: only changes if the password changes

  // useEffect hook: runs the passwordGenerator function automatically
  useEffect(()=>{
    passwordGenerator()
  // Dependencies: This effect runs when the component loads, or whenever any of these values change
  // (i.e., when length, noAllowed, or charAllowed is toggled, or the generator function itself is updated)
  },[length,noAllowed,charAllowed,passwordGenerator])

  // JSX structure for the user interface
  return (
    <>
    {/* Main container card styled with Tailwind CSS */}
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 '>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
          
          {/* Input field and Copy button container */}
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
       {/* Input field for displaying the password */}
       <input type="text"
       value={password} // The displayed value comes from the 'password' state
       className='outline-none w-full py-1 px-3' 
       placeholder='Password'
       readOnly // Makes the input non-editable by the user
       ref={passwordRef} // Attaches the reference hook to this input
       />
       {/* Copy button that calls the copy function on click */}
       <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
      
      {/* Controls container (Range slider and Checkboxes) */}
      <div className='flex text-sm gap-x-2'>
            
            {/* Length control */}
            <div className='flex items-center gap-x-1'>
        <input type='range' // Slider input type
        min={6}
        max={100}
        value={length} // Slider position is bound to the 'length' state
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}} // Updates 'length' state when slider moves
        />
        <label>Length: {length}</label>
            </div>
            
            {/* Number inclusion checkbox */}
            <div className='flex items-center gap-x-1'>
        <input type='checkbox' 
        defaultChecked={noAllowed} // Initial state of the checkbox
        id='numberInput'
        onChange={()=>{
          // Toggles the 'noAllowed' state (true <-> false)
          setnoAllowed((prev)=> !prev);
        }}
        />
         <label htmlFor='numberInput'>Numbers</label>
        </div>
            
            {/* Character inclusion checkbox */}
            <div className='flex items-center gap-x-1'>
                <input type='checkbox' 
                defaultChecked={charAllowed} // Initial state of the checkbox
                id='characterInput'
                onChange={()=>{
                // Toggles the 'charAllowed' state (true <-> false)
                setcharAllowed((prev)=> !prev);
                }}
                />
              <label htmlFor='characterInput'>Character</label>
            </div>
      </div>
     
    </div>
    </>
  );
}

export default App;