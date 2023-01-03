// var Twitter = require('twitter');
// var API_KEYS = require('../../config/api')

// var client = new Twitter({
//     consumer_key: API_KEYS.consumer_key,
//     consumer_secret: API_KEYS.consumer_secret,
//     access_token_key: API_KEYS.access_token_key,
//     access_token_secret: API_KEYS.access_token_secret
// });

            
// var params = {screen_name: 'TFF_Org' /*'Fenerbahce_EN'*/, count: 3, tweet_mode: 'extended'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     tweets.forEach(t => {
//       console.log(t);
//       // console.log(t.extended_entities.media[0].media_url)
//       // t.extended_entities.media.forEach(e => {
//       //   console.log(e)
//       // })
//       console.log(t.entities.media != null ? t.entities.media[0].media_url_https : "empty")
//       // console.log(t.is_quote_status ? t.quoted_status.entities.media[0].media_url_https : "no quote")
//     });
//   }
// });