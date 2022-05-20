import React from "react";

// let red = {color:`red`}
// let green = {color: `green`}

const Counter = () => {
  const [count, setCount] = React.useState(0);

  // const incrementCount = ()=>{
  //     setCount(count + 1);
  // };

  // const decrementCount = ()=>{
  //     setCount(count - 1)
  // }


  return (
    <div>
      <h1> Counter App</h1>
      <h1 style={count % 2 !== 0 ? {color: 'red',backgroundColor:'cyan'} : {color: 'green',backgroundColor:'grey'}} >{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(count * 2)}>Double</button>
    </div>
  );
};

export default Counter;
