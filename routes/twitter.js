var express = require('express');
var router = express.Router();
var Twitter = require('twitter-node-client').Twitter;

var defaultData = {  
  "created_at":"Mon Mar 26 02:20:26 +0000 2018",
  "id":978094295939887105,
  "id_str":"978094295939887105",
  "text":"default dummy data",
  "truncated":true,
  "entities":{  
     "hashtags":[  ],
     "symbols":[  ],
     "user_mentions":[  ],
     "urls":[  ]
  },
    "source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
  "in_reply_to_status_id":null,
  "in_reply_to_status_id_str":null,
  "in_reply_to_user_id":null,
  "in_reply_to_user_id_str":null,
  "in_reply_to_screen_name":null,
  "user":{
    "id":59952732,
         "id_str":"59952732",
         "name":"Resonate Solutions",
         "screen_name":"ResonateAU"
  },
  "geo":null,
  "coordinates":null,
  "place":null,
  "contributors":null,
  "is_quote_status":false,
  "retweet_count":0,
  "favorite_count":1,
  "favorited":false,
  "retweeted":false,
  "possibly_sensitive":false,
  "lang":"en"
 };

// var count = 0;

var getTwitterInfo = function(error, success) {
  var config = {
    "consumerKey": process.env.twitterConsumerKey,
    "consumerSecret": process.env.twitterConsumerSecret,
    "accessToken": process.env.twitterAccessToken,
    "accessTokenSecret": process.env.twitterAccessTokenSecret,
    "callBackUrl": ""
  };
  var twitter = new Twitter(config);
  
  twitter.getUserTimeline({ screen_name: 'resonateAU', count: '10'}, error, success);
  //twitter.getSearch({'q':'resonateAU','count': 10}, error, success);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  // count++;
  // if (count % 2 == 0) {
  //   res.send([defaultData]);
  //   return;
  // }
  var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
    res.send([]);
  };
  var success = function (data) {
    console.log('Data success');
    res.send(data);
  };

  getTwitterInfo(error, success);
  // res.send('respond with a resource');
});

module.exports = router;

