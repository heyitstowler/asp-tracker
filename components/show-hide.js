import { useState } from "react";

export default function ShowHide({ children }) {
  // useState is a react hook
  // it returns an array containing two values:
  // a state variable that persists in between renders
  // as well as a setter function to update the value
  // You can destructure arrays like objects based on their position, see below
  const [isShowing, setIsShowing] = useState(false);

  // ternary operator: condition ? thisIfCondition : elseThis
  return (
    <div>
      {/* this is called an arrow function, see below */}
      <button onClick={() => setIsShowing(!isShowing)}>
        Click to {isShowing ? "Hide" : "Show"}!
      </button>
      <div>{isShowing ? children : null}</div>
    </div>
  );
}

// Destructuring arrays is just like destructuring objects:
//
//    const [first, second, third] = array
//
//  is the same as
//
//    const first = array[0]
//    const second = array[1]
//    const third = array[2]

// An arrow function is a shorthand way to write an anonymous function
// it's the same concept as a lambda function in python/other languages
//
//    const add = (num1) => num1 + num2
//
// is basically* the same as writing
//
//    const add = function (num1, num2) {
//      return num1 + num2
//    }
//
// It's very useful for writing handler functions in place, like in the onClick definition above
//
// *basically meaning there are some key differences that don't come up very often,
// but if you've ever had to use .bind then you will be excited to know that arrow
// functions do not require you to need to use .bind so that's nice
