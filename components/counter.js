import { useState } from "react";

export default function Counter() {
  // useState takes a default value for the count to start at
  const [count, setCount] = useState(0);

  // You can define handlers in advance
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      Count: {count}
      <div>
        <button onClick={increment}>+ 1</button>
        <button onClick={decrement}>- 1</button>
      </div>
    </div>
  );
}
