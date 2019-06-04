const express = require('express');
const app = express();
const port = 3001;

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

let users = [];


app.set('view engine', 'pug')


app.get('/', function (req, res) {
    res.render('index', { 
        title: 'My login', 
        message: 'Login:', 
        pmail: 'Email',  
        ppass: 'Password', 
        users: users,
    })
    
});

//formulärdatan skickas som: application/x-www-form-urlencoded i postman
app.post('/user', (req, res) => {
    const body = req.body;
    console.log(req.body);

    let user = { 
        email: body.email,
        password: body.password,
      };

      users.push(user);

      res.end("logged in as : " + user.email + "      Password : " + user.password);
      console.log("outside users: " + users);
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))