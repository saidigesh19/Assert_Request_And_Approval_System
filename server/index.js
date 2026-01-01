require("dotenv").config();
const express = require("express");
const dataBase = require("./src/config/MongoConnection");
const router = require("./src/Router/authRouter");

const app = express();
const PORT = process.env.PORT || 5000;

dataBase();

app.use(express.json());
app.use("/api", router);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
