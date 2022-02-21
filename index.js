const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001;

app.get("/", (req, res) => {
  res.json("Hello World from Thoughtful Coding!! We are doing it");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
