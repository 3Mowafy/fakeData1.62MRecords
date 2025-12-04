const mongoose = require("mongoose");

mongoose.connect(process.env.DBNAME).then(() => {
  console.log(`Databse Connected: ${mongoose.connection.host}`);
});

module.exports = mongoose;
