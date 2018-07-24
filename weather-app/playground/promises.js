var somePromise= new Promise((resolve, reject)=>{
    reject('Error here!! :p');
    resolve('This is a function');
})
somePromise.then(
    (message)=>{
        console.log('Success'+ message);
    }
    ,
    (errorMessage)=>{
         console.log(errorMessage);
    }
)