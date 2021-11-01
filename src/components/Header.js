import React from "react";
import Paper from "@material-ui/core/Paper";

function Header() {
  return (
    <Paper style={{ padding: "5px", display: "flex",backgroundColor: "pink"}} square elevation={3}>
      <img
        style={{ width: "50px" }}
        src="https://cdn.iconscout.com/icon/free/png-64/react-1543566-1306069.png"
        alt="new"
      ></img>
      <h1 style={{ margin: "0", fontFamily: "cursive", fontWeight: "100" }}>
        Phone Catalog
      </h1>
    </Paper>
  );
}

export default Header;
