const request=require('request');
const yargs=require('yargs');

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

geocode.geoViewer(argv.a,(errorView, results)=>{
    if(errorView){
        console.log(errorView);
    }
    else if(results){
        console.log(`Address: ${results.address}`);
        weather.weatherView(results.latitude, results.longitude, (errorViewWeather, weatherResults)=>{
           if(errorViewWeather){
               console.log(errorViewWeather);
           }
           else if(weatherResults){
               console.log(`Weather is ${weatherResults.temperature} feel like ${weatherResults.feel}`)
           }
       })
    }
})


