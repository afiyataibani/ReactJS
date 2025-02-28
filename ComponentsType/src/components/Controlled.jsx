import { useState } from "react";

/*
Controlled Components :
1 : A controlled component is a form input element where React Controls the state of input value.
2 : The value is stored in react state {useState}.
3 : and any update to the input field(value) updated the state.

How it works :
1 : The components has an internal state (useState).
2 : The input fields value is bound to the state.
3 : Every change triggers an onChange handler, update the state.
*/

function Controlled() {
    const [name, setName] = useState("")
    const handleChange = (event) =>{
        setName(event.target.value) 
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        alert(`Submitted Name: ${name}`)
    }

  return (
    <div>
        <h1>Controlled Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{marginRight: "10px"}}>Name</label>
            <input type="text" value={name} onChange={handleChange} /><br/><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Controlled