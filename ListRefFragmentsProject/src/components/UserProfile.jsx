import React, { Fragment, useState } from "react";

const UserProfile = ({ theme }) => {
  const [profile, setProfile] = useState({
    name: "Afiya Taibani",
    email: "afiyataibani@gmail.com",
    bio: "React developer.",
    notification: true,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ ...formData });
    setIsEditing(false);
  };

  const containerStyle = {
    textAlign: "center",
    padding: "25px",
    borderRadius: "12px",
    backgroundColor: theme === "light" ? "#FAF3DD" : "#2C2C2C",
    color: theme === "light" ? "#333" : "#EAEAEA",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.15)",
    width: "340px",
    margin: "auto",
    marginTop: "50px",
    fontFamily: "'Poppins', sans-serif",
  };

  const inputStyle = {
    padding: "12px",
    border: `2px solid ${theme === "light" ? "#B3B3B3" : "#666"}`,
    borderRadius: "8px",
    fontSize: "16px",
    width: "80%",
    textAlign: "center",
    margin: "10px",
    backgroundColor: theme === "light" ? "#FFFFFF" : "#3A3A3A",
    color: theme === "light" ? "#333" : "#EAEAEA",
    outline: "none",
    transition: "border 0.3s ease",
  };

  const buttonStyle = {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "17px",
    margin: "8px",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme === "light" ? "#61A5C2" : "#3E7CB1", 
    color: "#fff",
  };

  const saveButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme === "light" ? "#6BCB77" : "#379B69", 
    color: "#fff",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme === "light" ? "#FF9F45" : "#E87424", 
    color: "#fff",
  };

  return (
    <Fragment>
      <div style={containerStyle}>
        <h1 style={{fontWeight: "600",color: theme === "light" ? "#333" : "#FFD700", }}>User Profile</h1>
        <h2 style={{color: theme === "light" ? "#555" : "#bbb" }}>
          Using state for form handling
        </h2>

        {!isEditing ? (
          <div>
            <h3>{profile.name}</h3>
            <h4>Email: {profile.email}</h4>
            <h4>Bio: {profile.bio}</h4>
            <h4>
              Notifications:{" "}
              <strong style={{ color: profile.notification ? "green" : "red" }}>
                {profile.notification ? "Enabled" : "Disabled"}
              </strong>
            </h4>
            <button onClick={() => setIsEditing(true)} style={editButtonStyle}>
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Email"
            />
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              style={{ ...inputStyle, height: "80px" }}
              placeholder="Bio"
            />
            <div>
              <label style={{ fontSize: "16px", fontWeight: "500" }}>
                <input
                  type="checkbox"
                  name="notification"
                  checked={formData.notification}
                  onChange={handleChange}
                  style={{ marginRight: "5px" }}
                />
                Enable Notifications
              </label>
            </div>
            <div>
              <button type="submit" style={saveButtonStyle}>
                Save
              </button>
              <button type="button" onClick={() => setIsEditing(false)} style={cancelButtonStyle}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </Fragment>
  );
};

export default UserProfile;
