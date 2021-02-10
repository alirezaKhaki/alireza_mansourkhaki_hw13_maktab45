const express = require("express");
const app = express();
const path = require("path");
const user = require("./routes/user");
const admin = require("./routes/admin");

app.use("/user", user);
app.use("/admin", admin);

app.use(express.static(path.join(__dirname, "./public")));

app.listen(5000, () => {
  console.log("Server started...");
});
