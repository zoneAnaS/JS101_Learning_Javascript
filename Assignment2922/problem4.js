let storedPassword = "123456";
let storedUsername = "AnasShaikh";

let inputPassword = "123456";
let inputUsername = "AnasShaikh";

if(storedUsername == inputUsername){
  if(storedPassword == inputPassword){
    console.log("You can login");
  }
  else{
    console.log("Incorrect Password");
  }
  
}
else{
  console.log("Username not found");
}