
const request = require('request');
const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

function getTemp(cityName, fun) {
    request(URL + cityName, (err, res, body) => {
        if (err) return fun(err);
        const result = JSON.parse(body)
        return fun(result.main.temp)
    })
}
getTemp("hanoi", console.log)