'use strict';
var _ = require('lodash');
var request = require('request');
var ENDPOINT = 'https://api.deutschebahn.com/freeplan/v1/location/';

function FAADataHelper() { }

//FAADataHelper.prototype.requestdbcityStatus = function(dbcity) {
//  return this.getdbcityStatus(dbcity).then(
//    function(response) {
//      console.log('success - received dbcity info for ' + dbcity);
//      return response.body;
//    }
//  );
//};

FAADataHelper.prototype.getdbcityStatus = function(dbcity) {
  var options = {
    method: 'GET',
    header: '"Authorization: Bearer c599773c9c9e82512270de9a5e56a8ba"',
    uri: ENDPOINT + dbcity,
    resolveWithFullResponse: true,
    json: true
  };
  return request(options);
};
module.exports = FAADataHelper;
