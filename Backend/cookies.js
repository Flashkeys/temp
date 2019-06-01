const express = require('express');
let cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const port = 3001;

app.get("/setCookie", (req, res) => {
    let name = req.query.name; // this is just for the url after localhost/getCookie you add ?name=dan
    res.cookie("name", name); // the name in "name" is the name of the cookie no just a string.
    res.end();  // I need to stop the response otherwise it will just sit and wait for response.
});

app.get("/getCookie", (req, res) => {
    res.send("hello " + req.cookies.name); // the cookies.name is the name of the one above.
    console.log(get);
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))