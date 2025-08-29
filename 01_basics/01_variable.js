const accountId = 14453
let accountEmail = "subrat@gmail.com"
var accountPassword = "1234"
accountCity = "bhadrak"
let accountState;  // there is no value so it will not be assign

// accountId = 2

accountEmail = "s@ac.com"
accountPassword = "21212121"
accountCity = "bhubneswar"

console.log(accountId);

/* 
prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

