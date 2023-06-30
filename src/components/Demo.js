import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("Rendering..");
  // if heavy operation is happend every time when state changes then i can memioz the heavy operation using useMemo

  // const prime = () => {
  //   return findPrime(text);
  //  } // due to this heavy operation my screen freeze in browser
  // every time I toggled button and it called prime and freeze screen for some time and then toggle working so this type of issue is handle by memoization or by useMemo()
  // useMEmo hook that lets you cache the result of calulations(prime) between re render

  // I want to memoize the result of above function prime
 // -----------------------(calculation_result, dependencies)
  const prime = useMemo(() => findPrime(text), [text]); // what it did it cache the result until my text or dependencies changes and it only call when text state change

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black" +
        (isDarkTheme && " bg-gray-900 text-white")
      }
    >
      <div className="border border-black w-20 p-2 m-10 bg-green-100"><button onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button></div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mt-4 font-bold text-lg">Nth Prime iss: {prime}</div>
    </div>
  );
};

export default Demo;
