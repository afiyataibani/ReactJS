import React, { useEffect, useRef, useState } from "react";

function PreviousState() {
    const [count, setCount] = useState(0)
    const prevValueRef = useRef(0)

    useEffect(()=>{
        prevValueRef.current = count
    }, [count])
  return (
    <div>
        <h2>2. Showing Previous State</h2>
        <h3>Count : {count}</h3>
        <h3>Previous : {prevValueRef.current}</h3>
        <button onClick={()=>{ setCount(count + 1)}}>Increment</button>
    </div>
  )
}

export default PreviousState