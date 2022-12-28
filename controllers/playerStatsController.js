var axios = require('axios');
/*
var config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/players/topscorers?season=2022&league=203',
    headers: {
      'x-rapidapi-key': 'b2e1c1527f6f1befd2028c2901528051',
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };
*/

var config = {
    method: 'get',
    url: 'https://mocki.io/v1/43d828c6-7af0-4e19-9c05-c19af464198f',
  };

/*
var config2 = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/players/topassists?season=2022&league=203',
    headers: {
        'x-rapidapi-key': 'b2e1c1527f6f1befd2028c2901528051',
        'x-rapidapi-host': 'v3.football.api-sports.io'
    }
};
*/

var config2 = {
    method: 'get',
    url: 'https://63aca89234c46cd7ae876877.mockapi.io/assist',
  };

module.exports = {

  getTopScorer: async (req, res) => {
      axios(config)
      .then(function (response) {
        console.log(response)
        res.json(response.data.response.slice(0,10));
      })
      .catch(function (error) {
        res.json({error});
      });
  },
  
  
  getTopAssist: async (req, res) => {
    axios(config2)
    .then(function (response) {
      res.json(response.data[0].response.slice(0,10));
      //res.json(response.data.response.slice(0,10));
    })
    .catch(function (error) {
      res.json({error});
    });
},
};
