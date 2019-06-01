const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());

app.post('/uppercase', (req, res) =>{
    let value = req.body.value.toUpperCase();
    res.send({value});
});

app.post('/lowercase', (req, res) =>{
    let value = req.body.value.toLowerCase();
    res.send({value});
});

app.post('/capitalize', (req, res) =>{
    let value = req.body.value.charAt(0).toUpperCase() + req.body.value.slice(1);
    res.send({value});
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));