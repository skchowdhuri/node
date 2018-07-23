var request=require('request');
const yargs=require('yargs');

const argv=yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'This is the address of weather',
        string: true
    }
})
.help()
.argv

console.log(argv);


var encodedAddress=encodeURIComponent(argv.a);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
},
(error, Response, body)=>{
    console.log(`Address: ${JSON.stringify(body.results[0].formatted_address, undefined, 2)}`);
    console.log(`Latitude: ${JSON.stringify(body.results[0].geometry.location.lat)}`);
    console.log(`Longitude: ${JSON.stringify(body.results[0].geometry.location.lng)}`);
})