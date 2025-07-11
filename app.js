//chapter 20

const firstNames = ["Lil", "Big"];
const lastNames = ["Zzz", "Boom"];

for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    console.log(firstNames[i] + " " + lastNames[j]);
  }
}

for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    if (i !== j) {
      console.log(firstNames[i] + " " + lastNames[j]);
    }
  }
}

//chapter 21

let userInput = prompt("Enter something:");
console.log(userInput.toLowerCase());

let city = prompt("Enter city name:").toUpperCase();
if (city === "KARACHI","Lahore") {
  console.log("City matched!");
}

//chapter 22

let str = "Rean ";
console.log(str.slice(0, 5)); 

let input = prompt("Enter something:");
console.log(input.charAt(input.length - 1));

let fullName = prompt("Enter your full name:");
console.log("Length: " + fullName.length);

//chapter 23

let sentence = "The lazy dog sleeps.";
console.log(sentence.indexOf("dog")); 

let a = prompt("Type a sentence:");
if (input.toLowerCase().indexOf("hello") !== -1) {
  console.log("Found 'hello'");
}

//chapter 24

console.log("JavaScript".charAt(4)); 

let b = prompt("Enter a string:");
let pos = parseInt(prompt("Enter position:"));
console.log(str.charAt(pos));

//chapter 25

let text = "This is a bad example.";
console.log(text.replace("bad", "good"));

let c = "JS is awesome. I love JS.";
console.log(sentence.replace(/JS/g, "JavaScript"));

let name = prompt("Enter your name:");
let message = "Hello, NAME";
console.log(message.replace("NAME", name));

//chapter 26

console.log(Math.round(2.6)); 
console.log(Math.floor(2.6)); 
console.log(Math.ceil(2.6));  

let num = parseFloat(prompt("Enter a number:"));
console.log(Math.round(num));

console.log(Math.floor(-2.9)); 
console.log(Math.ceil(-2.9));  

//chapter 27

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

let toss = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(toss);

let password = Math.floor(Math.random() * 9000) + 1000;
console.log(password);

//chapter 28

let d = parseFloat("45.67");
console.log(num);

console.log(parseInt("123px")); 

console.log(parseInt("abc")); 

//chapter 29

let e = 123;
let f = num.toString();
console.log(str, typeof str); 

let result = Number("2025") + 10;
console.log(result); 

console.log(parseInt("100abc")); 
console.log(Number("100abc"));  

//chapter 30

let g = 123.45678;
console.log(num.toFixed(2)); 

let h = parseFloat("12.999");
console.log(num.toFixed(1)); 

let i = parseFloat(prompt("Enter a decimal:"));
console.log(input.toFixed(3));

//chapter 31

let now = new Date();
console.log(now);

console.log(new Date().getFullYear());
let hours = new Date().getHours();
console.log(hours < 12 ? "Good Morning" : "Good Evening");

//chapter 32

let today = new Date();
console.log("Day:", today.getDate());
console.log("Month:", today.getMonth() + 1); 
console.log("Year:", today.getFullYear());
let j = new Date();
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
let k = new Date();
let l = now.getHours();
let minutes = now.getMinutes();
console.log(`${hours}:${minutes < 10 ? "0" + minutes : minutes}`);

















