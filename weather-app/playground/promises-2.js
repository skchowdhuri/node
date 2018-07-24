const request=require('request');

var geocodeAddress=(address)=>{
return new Promise((resolve, reject)=>{

    var encodedAddress=encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    },
    (error, Response, body)=>{
        if(body.status==='ZERO_RESULTS'){
            reject('This is an error message');
        }
        else if(body.status==='OK'){
            resolve({
               address: body.results[0].formatted_address,
               latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
        else{
            console.log('There is a problem at the time of fetching result');
        }
    });
});
};

geocodeAddress('743270')
    .then(
        (message)=>{
            console.log(JSON.stringify(message, undefined, 2));
        },
        (errMsg)=>{
            console.log(errMsg);
        }
    )