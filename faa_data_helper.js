'use strict';
let _ = require('lodash');
let request = require('request');
let ENDPOINT = 'https://api.deutschebahn.com/freeplan/v1/location/';

class FAADataHelper {

    getdbcityStatus(dbcity) {
        let options = {
            method: 'GET',
            uri: ENDPOINT + dbcity,
            resolveWithFullResponse: true,
            json: true
        };
        return options;
    }

    requestdbcityStatus(dbcity) {
        let request_options = this.getdbcityStatus(dbcity);

        let response = request(request_options, function (error, response, body) {
 	    if (response.statusCode == !'200'){
      console.log('error:', error); // Print the error if one occurred
	    }
      else if (response.statusCode == '200') {
        var filter = ['name', 'lat', 'lon']; // define what will be used from response
      console.log(JSON.stringify(body, filter, [0, 2], 4 )); // Shrink output to only name, lat and lon.
      console.log('statusCode:', response && response.statusCode);
	    }
      else {
      console.log('TEST:'); // Print omethign different
      }
        });

        return response.body;
    }

}

const helper = new FAADataHelper();
const request_test = helper.requestdbcityStatus("Berlin Hbf");
console.log(request_test)
