const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middle Ware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Services Review Server is Running");
});

app.listen(port, () => {
  console.log(`Services Review Running on Port ${port}`);
});
