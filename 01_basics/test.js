const accountId = 123443
let accountEmail = "hitesh@gmail.com"
var accountCity = "Jaipur"
let accountState;
// accountId = 2   //not allowed

accountEmail = "hc@hc.com"
accountPassword = "21211212"
accountCity = "Bengaluru"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
