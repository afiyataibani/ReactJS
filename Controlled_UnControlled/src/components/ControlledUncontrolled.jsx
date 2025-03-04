import React, { useRef, useState } from "react";

function ControlledUncontrolled() {
  const [isControlled, setIsControlled] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    bio: "",
    hobbies: [],
    country: "India",
    terms: false,
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();
  const countryRef = useRef();
  const termRef = useRef();
  const hobbyRefs = useRef([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" && name !== "terms"
        ? checked
          ? [...(prev.hobbies || []), value]
          : (prev.hobbies || []).filter((hobby) => hobby !== value)
        : type === "checkbox"
        ? checked
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isControlled ? "Controlled Form Submitted" : "Uncontrolled Form Submitted");
  };

  return (
    <div style={{ 
      width: "600px", 
      margin: "20px auto", 
      padding: "30px", 
      background: isControlled ? "#1E1E2F" : "#225353", 
      color: "#EAEAEA", 
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", 
      borderRadius: "8px", 
      transition: "background 0.5s ease" 
    }}>
      <h1 style={{ textAlign: "center", fontSize: "30px", marginBottom: "25px" }}>
        {isControlled ? "Controlled" : "Uncontrolled"} Form
      </h1>
      
      <div style={{ alignItems: "center", marginBottom: "25px", justifyContent: "center", display: "flex" }}>
        <input 
          type="checkbox" 
          checked={isControlled} 
          onChange={() => setIsControlled(!isControlled)} 
          style={{ marginRight: "10px" }} 
        />
        <label>Toggle Controlled/Uncontrolled</label>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {['Name', 'Email', 'Password', 'Age'].map((field) => (
          <div key={field} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label style={{ minWidth: "80px" }}>{field}</label>
            {isControlled ? (
              <input 
                type={field === "Age" ? "number" : field.toLowerCase()} 
                name={field.toLowerCase()} 
                value={formData[field.toLowerCase()]} 
                onChange={handleChange} 
                style={{ 
                  flex: 1, 
                  padding: "8px", 
                  border: "1px solid #555", 
                  borderRadius: "5px", 
                  background: "#2A2A3A", 
                  color: "#EAEAEA" 
                }} 
              />
            ) : (
              <input 
                type={field === "Age" ? "number" : field.toLowerCase()} 
                name={field.toLowerCase()} 
                ref={field === 'Name' ? nameRef : field === 'Email' ? emailRef : field === 'Password' ? passwordRef : ageRef} 
                style={{ 
                  flex: 1, 
                  padding: "8px", 
                  border: "1px solid #555", 
                  borderRadius: "5px", 
                  background: "#2A2A3A", 
                  color: "#EAEAEA" 
                }} 
              />
            )}
          </div>
        ))}

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ minWidth: "80px" }}>Gender</label>
          <div style={{ display: "flex", gap: "10px" }}>
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input type="radio" name="gender" value={g.toLowerCase()} checked={formData.gender === g.toLowerCase()} onChange={handleChange} />
                {g}
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ minWidth: "80px" }}>Hobbies</label>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {['Reading', 'Traveling', 'Sports'].map((hobby, index) => (
              <label key={hobby} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                {isControlled ? (
                  <input type="checkbox" name="hobbies" value={hobby} checked={formData.hobbies.includes(hobby)} onChange={handleChange} />
                ) : (
                  <input type="checkbox" name="hobbies" value={hobby} ref={(el) => (hobbyRefs.current[index] = el)} />
                )}
                {hobby}
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ minWidth: "80px" }}>Country</label>
          {isControlled ? (
            <select 
              name="country" 
              value={formData.country} 
              onChange={handleChange} 
              style={{ 
                flex: 1, 
                padding: "8px", 
                border: "1px solid #555", 
                borderRadius: "5px", 
                background: "#2A2A3A", 
                color: "#EAEAEA" 
              }}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          ) : (
            <select 
              name="country" 
              ref={countryRef} 
              style={{ 
                flex: 1, 
                padding: "8px", 
                border: "1px solid #555", 
                borderRadius: "5px", 
                background: "#2A2A3A", 
                color: "#EAEAEA" 
              }}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
          <input type="checkbox" name="terms" checked={isControlled ? formData.terms : undefined} onChange={isControlled ? handleChange : undefined} ref={isControlled ? null : termRef} style={{ marginRight: "8px" }} />
          <label>Accept Terms & Conditions</label>
        </div>

        <button type="submit" style={{ 
          backgroundColor: "#00A8E8", 
          color: "#fff", 
          padding: "10px", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer", 
          width: "100px", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          margin: "0 auto" 
        }}>
          Submit
        </button>

      </form>
    </div>
  );
}

export default ControlledUncontrolled;
