import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // if we made a button to generate password
  const generatePassword = () => {
    // logic
  };

  //to automatically generate password - useCallback and useEffect
  // call back uses memoization (dynamic programming)

  // useCallback - Don’t re-run this function unless the things it depends on have changed.
  const generatePasswordAutomatic = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]); // dependency array , values should not change too often

  // run code based on scenarios
  // runs automatically when the page loads
  // call function only when the dependencies change
  useEffect(() => {
    generatePasswordAutomatic();
  }, [length, numberAllowed, charAllowed]); // dependency array -> when a chnage in these run this again

/*Difference between useEffect and useCallback:
useCallback: has function definition, only re-runs the fn when dependencies are changed, else , has the value stored and returns 
the same value without performing everything again

useEffect: calls the function mentioned within only when the dependencies change, else dosent bother the current value in the dom
*/

  //copy to clipboard
  const copyPasswordToClipboard = () => {
    // to copy password to clipboard
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select() // selects the password once copied
  };

  //after copying highlight text to tell copied
  // useRef - powerful hook to grab from windows

  const passwordRef = useRef(null) // refering to the password ref={passwordRef} see in input tag

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3"> Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-amber-50 text-black"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={25}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => 
                !prev
              )
            }}
          />

          <label htmlFor="number">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => {
                !prev
              })
            }}
          />

          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
