'use strict';
let _ = require('lodash');
let request = require('request');
let ENDPOINT = 'https://api.deutschebahn.com/freeplan/v1/location/';
 
class FAADataHelper {
 
    getdbcityStatus(dbcity) {
        let options = {
            method: 'GET',
            header: '"Authorization: Bearer c599773c9c9e82512270de9a5e56a8ba"',
            uri: ENDPOINT + dbcity,
            resolveWithFullResponse: true,
            json: true
        };
        return options;
    }
 
    requestdbcityStatus(dbcity) {
        let request_options = this.getdbcityStatus(dbcity);
 
        let response = request(request_options, function (error, response, body) {
 	    if (console.error == !'null'){
            console.log('error:', error); // Print the error if one occurred
	    console.log('statusCode:', response && response.statusCode);
	    }
            else {
	    console.log('statusCode:', response && response.statusCode);
            console.log('body:', body); // Print the HTML for the Google homepage.
	    }
        });
 
        return response.body;
    }
}
 
const helper = new FAADataHelper();
const request_test = helper.requestdbcityStatus("Berlin");
console.log(request_test)
