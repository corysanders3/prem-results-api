# Prem Results API
This is used with the [Prem Results FE repo](https://github.com/corysanders3/prem-results-fe)

## Set Up
This server is deployed, but you can clone it down and run it locally as well. See 'Endpoints' for server side calls.

- Clone down the repo by running `git clone git@github.com:corysanders3/prem-results-api.git`
- CD into the repo
- Run `npm install`
- Run `node server.js`

## Endpoints (if fetching from deployed server)
### GET all results
URL: `https://prem-results-api.vercel.app/api/v1/premresults`
</br>
</br>
Sample Response (200):
```
[
  {
    "seasonEndYear": 2023,
    "team": "West Ham",
    "rank": 14,
    "matchesPlayed": 38,
    "wins": 11,
    "draws": 7,
    "losses": 20,
    "goalsFor": 42,
    "goalsAgainst": 55,
    "goalDifference": -13,
    "points": 40,
    "notes": ""
  },
  {
    "seasonEndYear": 2023,
    "team": "Wolves",
    "rank": 13,
    "matchesPlayed": 38,
    "wins": 11,
    "draws": 8,
    "losses": 19,
    "goalsFor": 31,
    "goalsAgainst": 58,
    "goalDifference": -27,
    "points": 41,
    "notes": ""
  }
]
```

### GET top goal scorers each year
URL: `https://prem-results-api.vercel.app/api/v1/premstats`
</br>
</br>
Sample Response (200):
```
[
  {
    "seasonEndYear": 2023,
    "goals": [
      {
        "name": "Erling Haaland",
        "club": "Manchester City",
        "place": 1,
        "goals": 36,
        "seasonEndYear": 2023,
        "image": "https://prod-media.beinsports.com/image/1696676401433_0bf5a91c-ec3d-4bcb-87d2-d71d49f01f32.jpg"
      },
      {
        "name": "Harry Kane",
        "club": "Tottenham Hotspur",
        "place": 2,
        "goals": 30,
        "seasonEndYear": 2023,
        "image": "https://static.independent.co.uk/2023/07/05/08/457ad57edd5afacc9320345a649a8541Y29udGVudHNlYXJjaGFwaSwxNjg4NTc2OTAw-2.71336144.jpg"
      },
      {
        "name": "Ivan Toney",
        "club": "Brentford",
        "place": 3,
        "goals": 20,
        "seasonEndYear": 2023,
        "image": "https://media.premiumtimesng.com/wp-content/files/2023/05/Ivan-Toney.jpeg"
      }
    ]
  }
]
```

