import React from "react";

class Createaccount extends React.Component {
  render() {
    const { input, handleChange, handleSubmit } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column", // Stack items vertically
          alignItems: "center",
          color: "#fff",
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "#f0f0f0",

          height: "80vh",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "2.5rem",
            color: "grey",
            marginBottom: "20px",
          }}
        >
          Create your account
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column", // Stack form elements vertically
            width: "800px", // Optional: Set a width for the form
            marginTop: "20px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between", // Spacing between the two fields
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, marginRight: "10px" }}>
              <label
                htmlFor="firstName"
                style={{ marginBottom: "5px", color: "grey" }}
              >
                Firstname:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={input.firstName}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  marginBottom: "15px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ flex: 1, marginRight: "10px" }}>
              <label
                htmlFor="lastName"
                style={{ marginBottom: "5px", color: "grey" }}
              >
                Lastname:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  marginBottom: "15px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              style={{ marginBottom: "5px", color: "grey" }}
            >
              <span> Email: </span>
            </label>
            <input
              type="email"
              id="email"
              value={input.email}
              onChange={handleChange}
              name="email"
              required
              style={{
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid grey",
                borderRadius: "5px",
                width: "100%",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              style={{ marginBottom: "5px", color: "grey" }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid grey",
                width: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center", // Align checkbox and label on the same line
              marginBottom: "15px",
            }}
          >
            <input
              type="checkbox"
              id="terms"
              name="terms"
              style={{
                marginRight: "10px", // Space between checkbox and label
                transform: "scale(1.2)",
              }}
            />
            <label htmlFor="terms" style={{ color: "grey" }}>
              I accept the Terms of Use & Privacy Policy
            </label>
          </div>
          <div>
            <button
              type="submit"
              style={{
                display: "flex",
                color: "white",
                font: "bold",
                backgroundColor: "green",
                width: "800px",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                height: "50px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Createaccount;
