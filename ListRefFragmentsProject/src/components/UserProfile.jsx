import React, { Fragment, useState, useEffect } from "react";

const UserProfile = ({ theme }) => {
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("userProfile");
    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "Afiya Taibani",
          email: "afiyataibani@gmail.com",
          bio: "React developer.",
          notification: true,
        };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
  }, [profile]);

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

  const inputStyle = {
    padding: "14px",
    border: `2px solid ${theme === "light" ? "#BFDBFE" : "#475569"}`,
    borderRadius: "10px",
    fontSize: "18px",
    width: "85%",
    textAlign: "center",
    margin: "12px auto",
    outline: "none",
    display: "block",
    boxShadow: theme === "light" ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
    backgroundColor: isEditing
      ? theme === "light"
        ?"rgb(55, 84, 112)"
        : "#1E293B"
      : theme === "light"
      ? "#E6FFFB"
      : "#334155",
    color: theme === "light" ? "white" : "#DBEAFE",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <Fragment>
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          borderRadius: "12px",
          backgroundColor: theme === "light" ? "#F8F9FA" : "#1E1E1E",
          color: theme === "light" ? "#2D3748" : "#EAEAEA",
          boxShadow:
            theme === "light"
              ? "0 4px 8px rgba(0, 0, 0, 0.4)"
              : "0px 8px 16px rgba(0, 0, 0, 0.4)",
          width: "400px",
          margin: "auto",
          marginTop: "50px",
          fontFamily: "'Poppins', sans-serif",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <h1
          style={{
            fontWeight: "700",
            color: theme === "light" ? "#1E40AF" : "#60A5FA",
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          User Profile
        </h1>
        <h2
          style={{
            color: theme === "light" ? "#64748B" : "#94A3B8",
            fontSize: "20px",
            fontWeight: "400",
            marginBottom: "25px",
          }}
        >
          Manage your personal information
        </h2>

        {!isEditing ? (
          <div style={{ lineHeight: "1.6" }}>
            <h3 style={{ fontSize: "25px", fontWeight: "600", margin: "0 0 10px" }}>{profile.name}</h3>
            <h4 style={{ fontSize: "18px", margin: "8px 0", color: theme === "light" ? "#334155" : "#CBD5E1" }}>
              {profile.email}
            </h4>
            <h4 style={{ fontSize: "18px", margin: "8px 0", fontStyle: "italic" }}>{profile.bio}</h4>
            <h4 style={{ fontSize: "18px", margin: "8px 0 20px" }}>
              Notifications:{" "}
              <strong style={{ color: profile.notification ? "#10B981" : "#EF4444" }}>
                {profile.notification ? "Enabled" : "Disabled"}
              </strong>
            </h4>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                padding: "12px 24px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
                backgroundColor: theme === "light" ? "#60A5FA" : "#3B82F6",
                color: "#fff",
                margin: "10px 8px",
                letterSpacing: "0.5px",
              }}
            >
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
              style={{ ...inputStyle, height: "100px", resize: "none" }}
              placeholder="Bio"
            />
            <div style={{ margin: "15px 0" }}>
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: theme === "light" ? "#1E3A8A" : "#DBEAFE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <input
                  type="checkbox"
                  name="notification"
                  checked={formData.notification}
                  onChange={handleChange}
                  style={{ width: "18px", height: "18px", accentColor: theme === "light" ? "#60A5FA" : "#3B82F6" }}
                />
                Enable Notifications
              </label>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
              <button
                type="submit"
                style={{
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  backgroundColor: theme === "light" ? "#34D399" : "#10B981",
                  color: "#fff",
                }}
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                style={{
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  backgroundColor: theme === "light" ? "#FBBF24" : "#D97706",
                  color: "#fff",
                }}
              >
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
