require("dotenv").config();
const cors = require('cors')
const express = require("express");
const dataBase = require("./src/config/MongoConnection");
const router = require("./src/Router/authRouter");
const assertRouter=require("./src/Router/assertRouter");
const adminRouter=require("./src/Router/adminRouter");

const app = express();
const PORT = process.env.PORT || 5000;

dataBase();

app.use(express.json());
app.use(cors())
app.use("/api", router);
app.use("/api",assertRouter);
app.use("/api",adminRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
