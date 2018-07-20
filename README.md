## Idea: build a nodeJS which can connect to bahn API as a preparation for an alexa skill

1. original idea from:
https://www.bignerdranch.com/blog/developing-alexa-skills-locally-with-nodejs-setting-up-your-local-environment/
2. original repo:
https://github.com/bignerdranch/alexa-airportinfo
3. uses API which is only returning 500
http://services.faa.gov/docs/services/airport/#airportStatus which is not long in use

***
So using the Bahn API instead
https://developer.deutschebahn.com/store/apis/info?name=Fahrplan-Free&version=v1&provider=DBOpenData#!/default/get_location_name

example cURL:
curl -X GET --header "Accept: application/json" "https://api.deutschebahn.com/freeplan/v1/location/Berlin"


