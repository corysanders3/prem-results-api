const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const premResults = require('./prem-results-data.js');
const favPremPlayer = require('./fav-prem-player.js');
const premStats = require('./prem-stats-data.js');

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Premier League Results';
app.locals.premResults = premResults;
app.locals.favPremPlayer = favPremPlayer;
app.locals.premStats = premStats;

app.get('/', (request, response) => {
  response.send('Prem Results');
});

app.get('/api/v1/premresults', (request, response) => {
  response.send(app.locals.premResults)
});

app.post('/api/v1/favpremplayer', (request, response) => {
  const newFavAddition = request.body
  const foundPlayer = app.locals.favPremPlayer.find(fpp => fpp.player.includes(newFavAddition.player));
  const index = app.locals.favPremPlayer.length - 1

  if(!foundPlayer) {
    newFavAddition.numOfFavs = 1;
    newFavAddition.id = app.locals.favPremPlayer[index].id + 1;
    app.locals.favPremPlayer.push(newFavAddition);
    response.status(201).send(newFavAddition);
  } else {
    response.status(422).send({ error: `${newFavAddition.player} already exists within favorite players list.` });
  }
  console.log(app.locals.favPremPlayer)
});

app.patch('/api/v1/favpremplayer', (request, response) => {
  const newFav = request.body
  const index = app.locals.favPremPlayer.findIndex(fpp => fpp.player === newFav.player);

  if(index === -1) {
    return response.status(400).send({ error: `${newFav.player} not found.` });
  } else {
    app.locals.favPremPlayer[index].numOfFavs++
  }

  response.status(200).send(newFav);
});

app.delete('/api/v1/favpremplayer', (request, response) => {
  const deletePlayer = request.body
  const index = app.locals.favPremPlayer.findIndex(fpp => fpp.player === deletePlayer.player);

  if(index === -1) {
    return response.status(400).send({ error: `${deletePlayer.player} not found.` });
  } else {
    app.locals.favPremPlayer.splice(index, 1)
  }
  response.status(200).send(deletePlayer);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});