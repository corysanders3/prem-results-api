const express = require('express');
const app = express();
const premResults = require('./prem-results-data.js')

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Premier League Results';
app.locals.premResults = premResults;

app.get('/', (request, response) => {
  response.send('Prem Results');
});

app.get('/api/v1/premresults', (request, response) => {
  response.send(app.locals.premResults)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});