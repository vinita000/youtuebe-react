import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  // IMPORTANT - ref is like an object
  const ref = useRef(0); // 0 is initial value, ref = {current: 0}, not ref = 0
  // console.log(ref)

  // let i;
  const i = useRef(null);
  useEffect(()=> {
    i.current = setInterval(() => {
      console.log("Interval", Math.random())
    }, 1000)
  }, [])

  return (
    <div className="m-4 p-4 bg-slate-50 border border-black w-96 h-96">
      <button
        className="bg-green-100 px-2 m-2"
        onClick={() => {
          x = x + 1;
          console.log(x);
        }}
      >
        Increase x
      </button>
      <span className="font-bold text-sm">Let = {x}</span>
      <button
        className="bg-green-100 px-2 m-2"
        onClick={() => {
          setY(y + 1);
        }}
      >
        Increase y
      </button>
      <span className="font-bold text-sm">State = {y}</span>

      <button
        className="bg-green-100 px-2 m-2"
        onClick={() => {
          ref.current = ref.current+1
          console.log("ref", ref.current)
        }}
      >
        Increase z
      </button>
      <span className="font-bold text-sm">Ref = {ref.current}</span>
      <button className="m-4 p-4 bg-red-900" onClick={() => clearInterval(i.current)}>Clear interval</button>
    </div>
  );
};

export default Demo2;

// this above code increase value of x but not re render so that updated data not seen in ui when use define normal let variable and want to increase value onclick button
// Whenever my components re render it refreshes my let and x going to its initial value 11