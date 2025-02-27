import React from 'react'
import { useEffect, useRef } from "react";

function BasicDomMani() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.style.border = '1px solid #808000'
    }, [])
  return (
    <div>
        <h2>3. Basic Dom-Manipulation Using UseRef</h2>
        <input type="text" ref = {inputRef} placeholder='Focus On Load' style={{padding: "10px", width: '200px'}} />
        <button onClick={() => inputRef.current.focus()}>Refocus Input</button>
    </div>
  )
}

export default BasicDomMani