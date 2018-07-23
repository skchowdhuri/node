var getUser=(id,callback)=>{
    var user={
        id: id,
        name: 'Sagor'
    }
    callback(user);
}
getUser(31,(userObj)=>{
    console.log(userObj);
});