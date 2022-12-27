const mongoose = require("mongoose");

var Twitter = require("twitter");
var API_KEYS = require("../config/api");

var client = new Twitter({
  consumer_key: API_KEYS.consumer_key,
  consumer_secret: API_KEYS.consumer_secret,
  access_token_key: API_KEYS.access_token_key,
  access_token_secret: API_KEYS.access_token_secret,
});

module.exports = {
  showNews: async (req, res) => {
    //var { propName } = req.body;

    var params = {screen_name: 'TFF_Org' /*'Fenerbahce_EN'*/, count: 7, tweet_mode: 'extended'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        // tweets.forEach(async (t) => {
        //   //console.log(t);
        //   // console.log(t.extended_entities.media[0].media_url)
        //   // t.extended_entities.media.forEach(e => {
        //   //   console.log(e)
        //   // })
        //   console.log(t.entities.media != null ? t.entities.media[0].media_url_https : "empty")
        //   await res.json({tweet: t});
        //   // console.log(t.is_quote_status ? t.quoted_status.entities.media[0].media_url_https : "no quote")
        // });
      
        res.json(tweets);
      }
    });
  },
};