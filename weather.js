
const request = require('request');
const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

function getTemp(cityName, fun) {
    request(URL + cityName, (err, res, body) => {
        if (err) return fun(err, null);
        const result = JSON.parse(body)
        if (!result.main)
            return fun(new Error('Khong tim thay thanh pho'), null)
        return fun(null, result.main.temp)
    })
}
getTemp("haccnoi", (err, temp) => {
    console.log(err ? err.message : temp)
})