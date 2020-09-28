const request = require('request');

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmF2ZWVuMSIsImEiOiJja2ZmMXBrMmEwODB3MnFsNGtjM2F1bHBmIn0.LeDhdQk6eauxG8mNMQui3g&limit=1'

    request({url, json: true}, (error, {body: geoData}) => {
        if(error) {
            callback('Unable to connect to location services!', undefined);
        } else if(geoData.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            // console.log(geoData.features[0].center);
            callback(undefined, {
               latitude: geoData.features[0].center[0],
               longitude: geoData.features[0].center[1],
               location: geoData.features[0].place_name
            })
        }
    })
}

module.exports = geoCode