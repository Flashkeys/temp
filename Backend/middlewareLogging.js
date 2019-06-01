const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  let start = new Date();

  console.log("METHOD: ", req.method);
  console.log("URL: ", req.url);

  res.on("finish", () => {
    let end = new Date();
    console.log("STATUS: ", res.statusCode);
    console.log("ResponseTime: ", `${end - start}ms`);
  });

  next();
});

app.get("/", (_, res) => {
  res.status(200).send("hello");
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))