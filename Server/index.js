const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("MealDesk server is running...");
});

app.listen(port, () => {
  console.log(`Server is running perfectly on port ${port}`);
});
