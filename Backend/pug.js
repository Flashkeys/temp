const express = require('express');
const app = express();
const port = 3001;

app.set("view engine", "pug");

app.get("/", function (req, res) {
    res.render("index", { title: "Hey", message: "Hello there!" })
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))