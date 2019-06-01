const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

app.post('/uppercase', (req, res) =>{
    let value = req.body.value.toUpperCase();
    if (!req.body.value) {
        res.status(400).end();
        return
    }
    res.send({value})
});


app.post('/lowercase', (req, res) =>{
     let value = req.body.value.toLowerCase();
     if (!req.body.value) {
        res.status(400).end();
        return
    }
    res.send({value})
});

app.post('/capitalize', (req, res) =>{
    let value = req.body.value.charAt(0).toUpperCase() + req.body.value.slice(1);
    if (!req.body.value) {
        res.status(400).end();
        return
    }   
    res.send({value})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))