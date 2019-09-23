import React from "react";


function Jumbotron({ children }) {
  return (
    <div
      style={{ textAlign: "center",
              backgroundImage:"url('https://i.imgur.com/5rbTbyz.jpg')",
              color:"maroon",
            fontWeight:"bolder" }}
      className="col-lg jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;