const os=require('os');
const fs=require('fs');



var add2=(a,b) =>{
    console.log('Adding '+a+','+b);
    return a+b;
}

var getAll=() =>{
	console.log('Getting the all documents');
}

module.exports={
	add: add2,
	getAll: getAll

};

//var user=os.userInfo();

//fs.appendFileSync('sagor.txt',`User= ${user.username}`);

//console.log(user);
