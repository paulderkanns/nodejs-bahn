'use strict';
var request = require('request');

url = 'https://api.deutschebahn.com/freeplan/v1/location/';

request({
  url     : url,
  method  : 'GET',
  headers : {
    Authorization : 'ApiKey myUser:verySecretAPIKey',
    Accept        : 'text/json'
  }, function (error, response, body) {
    if (error) throw error;
    console.log(body);
  }
});
