const os=require('os');
const fs=require('fs');



module.exports.add=(a,b) =>{
    console.log('Adding '+a+','+b);
    return a+b;
}

//var user=os.userInfo();

//fs.appendFileSync('sagor.txt',`User= ${user.username}`);

//console.log(user);
