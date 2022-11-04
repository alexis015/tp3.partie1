// Alexis Guitard (a) 3 novembre 2022

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let others = "!@#$%^&*(){}[]=<>/,."

let password = []

//pareille que encient labo

for(let index = 0; index < 10; index++)

{

    let password1 = uppercase[Math.floor(Math.random()*uppercase.length)];
    let password2 = lowercase[Math.floor(Math.random()*lowercase.length)];
    let password3 = numbers[Math.floor(Math.random()*numbers.length)];
    let password4 = others[Math.floor(Math.random()*others.length)];
    password.push(password1+password2+password3+password4);

}
console.log(password)