import React from "react";

class Heading extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",

          alignItems: "flex-start",

          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "1000px",
            backgroundColor: "#f0f0f0", // Background color for the content area

            height: "30vh", // Full height stretch
          }}
          className="divider-text"
        >
          <span
            style={{
              flex: 1,
              borderBottom: "1.5px solid grey",
              marginRight: "8px",
            }}
          ></span>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "3rem",
              color: "grey",
              margin: "0 8px",
              lineHeight: "1",
            }}
            className="display-3"
          >
            Register
          </h1>

          <span
            style={{
              flex: 1,
              borderBottom: "1.5px solid grey",
              marginLeft: "8px",
            }}
          ></span>
        </div>
      </div>
    );
  }
}

export default Heading;
