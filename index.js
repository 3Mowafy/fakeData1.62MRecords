const express = require("express");
const compression = require("compression");

require("dotenv").config();
require("./config/db");
const app = express();
const PORT = process.env.PORT;
const fakeRoutes = require("./routes/fake.routes");

app.use(compression());
app.use(express.json());
app.use("/", fakeRoutes);

app.get("/", (req, res) => {
  res.send("System is Started");
});

app.listen(PORT, () => {
  console.log(`server opened on http://localhost:${PORT}`);
});
