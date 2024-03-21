import express from "express";

const app = express();

const myObj = {
  name: "Sanna",
  age: 22,
};

app.get("/", (req, res) => {
  res.json(myObj);
});

app.get("/subscribe", (req, res) => {
  // get the form information from the request object
  // and save it in the database
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
