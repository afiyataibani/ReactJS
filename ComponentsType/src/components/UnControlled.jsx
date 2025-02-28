import { useRef, useState } from "react";

/*
Un-Controlled Components :
1 : form element manages their own internal state instead of react.
2 : Instead of using useState , React's useRef to used to get the input value when needed.

How it works :
1 : Input field maintains its state within the DOM.
2 : React does not track the changes directly.
3 : useRef()
*/

function UnControlled() {
    const inputRef = useRef(null);

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Submitted Name: ${inputRef.current.value}`)
    }
  return (
    <div>
        <h1>UnControlled Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{marginRight: "10px"}}>Name</label>
            <input type="text" ref={inputRef}/><br/><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UnControlled