const express = require("express");
const compression = require("compression");
const cors = require("cors");

require("dotenv").config();
require("./config/db");
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(compression());
app.use(express.json());
const fakeRoutes = require("./routes/fake.routes");
app.use("/", fakeRoutes);

app.get("/", (req, res) => {
  res.send("System is Started");
});

app.listen(PORT, () => {
  console.log(`server opened on http://localhost:${PORT}`);
});
