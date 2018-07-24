const request=require('request');

var weatherView=(lat, lng, callback)=>{
    request({
        url: `https://api.darksky.net/forecast/cd50cdfe69d7c514cb76ccec1545989c/${lat},${lng}`,
        json: true
    },(error, response, body)=>{
        if(error){
            callback('There is an error to fetch the weather result');
        }
        else if(response.statusCode===400){
            callback('There is a problem to fetch the weather')
        }
        else if(response.statusCode===200){
            callback(undefined,{
                temperature: body.currently.temperature,
                feel: body.currently.apparentTemperature
            });
        }
    })
};

module.exports={
    weatherView: weatherView
}