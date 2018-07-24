const request=require('request');



var geoViewer=(address, callback)=>{

    var encodedAddress=encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    },
    (error, Response, body)=>{
        if(body.status==='ZERO_RESULTS'){
            callback('This is an error message');
        }
        else if(body.status==='OK'){
            callback(undefined,{
               address: body.results[0].formatted_address,
               latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
        else{
            console.log('There is a problem at the time of fetching result');
        }
    });
}


module.exports={
    geoViewer: geoViewer
}