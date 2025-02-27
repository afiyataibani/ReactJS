// Preserve value without re-rendering
import React, {useRef, useState} from 'react'

function PreserveValue() {
  const renderCount = useRef(0)
  const [count, setCount] = useState(0)

  const handelRef = () =>{
    renderCount.current += 1;
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Understanding UseRef</h1>
      <h2>1.Preserving Value Without Re-rendering</h2>
      <h3>Count: {count}</h3>
      <h3>Component Re-Render : {renderCount.current}</h3>
      <button onClick={handelRef}>Increment</button>
    </div>
  )
}

export default PreserveValue