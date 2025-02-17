import { useState } from "react";

const SignUpForm = ({onSubmit})=>{
    const[formData, setFormData] =useState({
        name: "",
        email: "",
        password: "",
        phoneNo: "",
        dob: "",
        file: "",
    })

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!formData.name || !formData.email || !formData.password) {
          alert("Please fill all details");
          return;
        }
        onSubmit(formData);
      };

      return (
        <div
          style={{
            padding: "20px",
            maxWidth: "500px",
            margin: "auto",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <h1>SignUp Form</h1>
    
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", margin: "10px" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", margin: "10px" }}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", margin: "10px" }}
            />
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", margin: "10px" }}
            />
            <input
              type="date"
              name="dob"
              placeholder="Enter your dob"
              value={formData.dob}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", margin: "10px" }}
            />
            <input
              type="file"
              name="file"
              placeholder="Enter your file"
              value={formData.file}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", margin: "10px" }}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default SignUpForm