const express = require("express");
app = express();
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000); 