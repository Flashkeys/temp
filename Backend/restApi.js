const express = require('express');
const app = express();
const port = 3002;
app.use(express.json());
const movies = [];

let i = 1;
function getID() {
    return i++;
}

app.get("/movies", (req, res) => {
    res.json({movies});
});

app.get("/movies/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === id);
    if (move) {
        res.json(movie);
    } else {
        res.status(404).end();
    }
});

app.delete("/movies/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if(movieIndex !== -1) {
        movies.splice(movieIndex, 1);
    }
    res.status(204).end();
});

app.put("/movies/:id", (req, res) => {

    const id = parseInt(req.params.id);




    const movieIndex = movies.findIndex(movie => movie.id === id);
    if(movieIndex !== -1) {
        movies[movieIndex] = req.body;
        req.status(200).send(movies[movie])
    }

});

app.post("/movies", (req, res) => {
    const body = req.body;
    if(!body.title || typeof obdy.title !== "string" || typeof body.rating !== "number"){
        res.status(400).end();
        return
    }
    let movie = {
        id: getID(),
        title: body.title,
        rating: body.rating,
    };
    movies.push(movie);
    res.status(201).json(movie);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


















// curl localhost:3002/movies -XPOST -H 'Content-Type: application/json' -d '{"title": "test", "rating": 3}'
// curl localhost:3002/movies
// curl localhost:3002/1 -XDELETE
// curl localhost:3002/movies/1 -XPUT -H 'Content-Type: application/json' -d '{"title": "another", "rating": 3}'

/*

const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

const arr = [];
let ids = 0;

app.get("/movies", (req, res) => {
    res.json({ movies: arr });
});

app.get("/movies/:id", (req, res) => {
    /*
    let id = req.parse.params.id;
    arr.find(id);
    console.log(id);
    res.end();
    */
/*


});

app.delete("/movies/:id", (req, res) => {



});

app.put("/movies/:id", (req, res) => {



});

app.post("/movies", (req, res) => {
    let body = req.body;
    if (!body) {
        res.status(400).end();
        return
    }
    ids++;
    body.id = ids;

    arr.push(body);
    res.send(body)
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


















// curl localhost:3002/movies -XPOST -H 'Content-Type: applicationjson' -d '{"title": "test", "rating": 3}'
// curl localhost:3002/movies

*/
