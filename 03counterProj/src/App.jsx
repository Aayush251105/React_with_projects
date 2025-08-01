import { useState } from "react";
function App() {

  const [counter , setCounter] = useState(15); // returns a variable and a method
  // usual way 
  // const addValue = () => {
  //   setCounter(counter + 1)
  // }

  // call back way
  const addValue = () => {
    //   setCounter(counter + 1)
    //   setCounter(counter + 1)
    //   setCounter(counter + 1)
    //   setCounter(counter + 1)
    // this will only add 1 to the counter 

    // this will add 1 four times as its given in a call back
    setCounter((prevCounter) => { prevCounter + 1});
    setCounter((prevCounter) => { prevCounter + 1});
    setCounter((prevCounter) => { prevCounter + 1});
    setCounter((prevCounter) => { prevCounter + 1});
  }
  const removeValue = () => {
    
    setCounter(counter - 1);
  }
  // let counter = 15;
  // const addValue = () => {
  //   counter++;
  //   console.log(counter);
  // }

  return (
    <>
    {/* < inject a variable with curly braces! */}
      <h1>React Course with hitesh {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <button
      onClick={addValue}
      >Add value</button> {"  "}{/* adds space */}
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
