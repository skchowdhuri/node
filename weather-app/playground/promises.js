var asynsAdd=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(typeof a=== 'number' && typeof b=== 'number'){
                resolve(a+b);
            }
            else{
                reject('Enter valid number');
            }
        }, 1500);
    });
}
asynsAdd(10,'20').then((res)=>{
    console.log(res);
    return asynsAdd(res,'20')
}).then((res)=>{
    console.log('The result should be 50 ' + res);
}).catch((errMsg)=>{
    console.log(errMsg);
});