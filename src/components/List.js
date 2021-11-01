import { LinearProgress, Paper } from "@material-ui/core";
import React from "react";

function List({ loading, contacts }) {
  console.log(contacts);
  return (
    <Paper
      style={{
        margin: "20px auto",
        padding: "20px",
        maxWidth: "350px",
        position: "relative",
        backgroundColor: "pink",
      }}
    >
      {loading ? (
        <LinearProgress />
      ) : (
        contacts.data.map((contact) => {
          return (
            <div style={{ display: "flex" }}>
              <img
                style={{
                  width: "70px",
                  borderRadius: "50%",
                  margin: "10px 20px 0 0",
                }}
                src={contact.imageFileName}
                alt={contact.name}
              ></img>
              <div>
                <h4>
                  {contact.name}
                </h4>
                <p style={{ fontSize: "10px" }}>{contact.price}</p>
              </div>
            </div>
          );
        })
      )}
    </Paper>
  );
}

export default List;
