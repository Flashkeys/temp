const express = require('express');
const app = express();
const PORT = 3001;

const arr = [
    { id: 1, name: "first one"},
    { id: 2, name: "secound one"},
    { id: 3, name: "another one"},
];

app.get('/', (req, res) => {
    res.send(arr); // res.send([1, 2, 3]);  res.send(arr[0]);
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))