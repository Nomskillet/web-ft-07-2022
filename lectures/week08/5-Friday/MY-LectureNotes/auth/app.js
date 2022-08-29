

const pbkdf2 = require('pbkdf2'); ///allows us to hash a string

//text => hash => 256 length text
//text => hash => 256 length text

let rainbow = {

}

const crypto = require('crypto'); // salt 

//text 

let password = "some user password";

let salt = crypto.randomBytes(20).toString('hex');

// console.log(salt);


let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256')

let hash = key.toString('hex')

// console.log(hash);

let stored_pass = `pbkdf2_sha256*${salt}*${hash}`

// console.log(stored_pass);


let newLoginPassword = "some user password"

//retrieve password out of database
let pass_parts = stored_pass.split('*'); //[pbkdf2]

console.log(pass_parts);

let newPassword = pbkdf2.pbkdf2Sync(newLoginPassword, pass_parts[2], parseInt(pass_parts[1]), 256, 'sha256')

let hashLoginPassword = newPassword.toString('hex')

if(hashLoginPassword == pass_parts[3]){
    console.log('passwords match');
}
else{
    console.log('what you trying to do');
}

// let phone = "333.222.2345"

// let phoneArr = phone.split('.') ///[333,222,2345]

// console.log(phoneArr);