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
       //console.log('Haha');
        throw new Error('There is an error');
    }
    console.log(response.data);
}).catch((e)=>{
    if(e.code==='ENOTFOUND'){
        console.log('There is a problem at the time of fetching problem');
    }
    else {
        console.log(e.message);
    };

});