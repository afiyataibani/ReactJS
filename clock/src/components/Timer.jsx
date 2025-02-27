import React, { useRef, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0)
    const timerRef = useRef(null);

    const startTimer = () =>{
        if(!timerRef.current){
            timerRef.current = setInterval(() =>{
                setSeconds((prev) => prev + 1)
            }, 1000)
        }
    }

    const stopTimer = () =>{
        clearInterval(timerRef.current)
        timerRef.current = null
    }
  return (
    <div>
        <h1>Timer</h1>
        <h2>Time: {seconds}</h2>
        <button onClick={startTimer} style={{marginRight : "10px"}}>Start</button>
        <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Timer