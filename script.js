const passwordBox = document.getElementById("password");
const passwordBoxValue = document.getElementById("password")
const passwordBox2 = document.getElementById("password2");
const passwordBox2Value = document.getElementById("password")
const passwordLength = 12;



const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbol = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const allChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function createPassword(){
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while( passwordLength > password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)]; 
    }

    passwordBox.value = password;
    
    createPassword2()
}

function createPassword2(){
  let password = " ";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while( passwordLength > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)]; 
  }
  passwordBox2.value = password;
}


function copyPassword(){
  passwordBox.select()
  navigator.clipboard.writeText(passwordBox.value)
}

function copyPassword2(){
  passwordBox2.select();
  navigator.clipboard.writeText(passwordBox2.value);
}