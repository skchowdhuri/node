const request=require('request');
const yargs=require('yargs');
const axios=require('axios');

const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');

const argv=yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'This is the address of weather',
        string: true
    }
})
.help()
.argv;

var encodedAddress=encodeURIComponent(argv.address);
var geocodeURL=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response)=>{
    if(response.data.status==='ZERO_RESULTS'){
        throw new Error('There is an error');
    }
    var lat=response.data.results[0].geometry.location.lat;
    var lng=response.data.results[0].geometry.location.lng;
    var weatherURL=`https://api.darksky.net/forecast/cd50cdfe69d7c514cb76ccec1545989c/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response)=>{
    var temperature=response.data.currently.temperature;
    console.log(temperature);
}).catch((e)=>{
    if(e.code==='ENOTFOUND'){
        console.log('There is a problem at the time of fetching problem');
    }
    else {
        console.log(e.message);
    };

});