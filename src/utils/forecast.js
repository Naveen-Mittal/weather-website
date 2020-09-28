const request = require('request');

const foreCast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f7bd2c5c87cdd09d6a5e0b7ea71ef4a8&query=' + lon + ',' + lat + '&units=m'

    request({url, json: true}, (error, {body}) => {
        //const {body} = response
      if(error) {
          callback('Unable to connect to the server', undefined);
      } else if (body.error) {
          callback('Unable to find location', undefined);
      } else {
            // callback(undefined, body)
          callback(undefined, `Weather data for ${body.location.name} is, Temperature ${body.current.temperature} degrees and it feels like ${body.current.feelslike}`)          
      }
    })
}

module.exports = foreCast;