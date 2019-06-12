const express = require('express');
const app = express();

//1. MIDDLEWARE
//-------------------------------------------------------------

//MIDDLEWARE
app.use(express.json());

let movies = []; // example: {id: 1, title: 'Hello', rating: 3}

//funktion som skapar ett ID (1+1, 2+1, 3+1...)
let i = 1;
function getID() {
  return i++;
}
//-------------------------------------------------------------



//2. HÄMTA API
//-------------------------------------------------------------

app.use((req, res, next) => { //middleware - home made
  res.once('finish', () => { // hämta responsen EN GÅNG, logga: "finish"
  res.json({movies}); //gör om datan till json, och spara i 'movies'
});

//hämta api:et movies - och plocka ut alla id
app.get('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id); //konvertera stängen till ett nummer. para i 'id'
  if (!id) { //OM id är tomt
    res.status(400).end(); //ANNARS skicka felkod 400 (Bad Request) 
    return;
  }
//-------------------------------------------------------------
  //hämta första värdet matchar 'id' - spara i 'movie'
  const movie = movies.find(movie => movie.id === id); 
  if (movie) { //OM 'movie' är true
    res.json(movie); //gör om datan till json
  } else {
    res.status(404).end(); //ANNARS skicka felkod 400 (Bad Request) 
  }
});

//3. POSTA TILL API
//-------------------------------------------------------------

app.post('/movies', (req, res) => {
  const body = req.body;
  //OM titeln inte finns, ELLER titeln INTE är en sträng, ELLER rating INTE är ett nummer
  if (!body.title || typeof body.title !== 'string' || typeof body.rating !== 'number') {
    res.status(400).end(); //ANNARS skicka felkod 400 (Bad Request)
    return;
  }

  //objektet 'movie' innhåller:
  let movie = {
    id: getID(),  //nyckel=id : value=värdet från functionen getID()          t.ex: id: 42
    title: body.title,//nyckel=title : value=hämtade datans title-värde       t.ex: title: "The Shing"
    rating: body.rating,//nyckel=rating : value=hämtade datans rating-värde   t.ex: rating: 8,4
  };
  movies.push(movie); // pusha 'movie' in i arrayn 'movies'
  res.status(201).json(movie); //konvertera 'movie' till json-data, och sätt statuskoden till 201 (Created)
});
//-------------------------------------------------------------

//4.  DELETE FUNCTION
//-------------------------------------------------------------

app.delete('/movies', (req, res) => {
  movies = [];
  res.status(204).end();
});

app.delete('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400).end();
    return;
  }

  const movieIndex = movies.findIndex(movie => movie.id === id);
  if (movieIndex !== -1) {
    movies.splice(movieIndex, 1);
  }
  res.status(204).end();
});
//-------------------------------------------------------------

app.put('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const body = req.body;
  if (!id || !body.title || typeof body.title !== 'string' || typeof body.rating !== 'number') {
    res.status(400).end();
    return;
  }

  const movieIndex = movies.findIndex(movie => movie.id === id);
  if (movieIndex !== -1) {
    let movie = {
      id: movies[movieIndex].id,
      title: body.title,
      rating: body.rating,
    };
    movies[movieIndex] = movie;
    res.status(200).send(movies[movieIndex]);
  } else {
    res.status(404).end();
  }
});

const PORT = 3033;
app.listen(PORT, function() {
  console.log('listening on', PORT);
});