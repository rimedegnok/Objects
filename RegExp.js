let email = prompt("Enter your email")
let phone = prompt("Enter your phone")
let password = prompt("Enter your password")

let Validator = {
    validateEmail(){
        let regexp_e = new RegExp("", "")
        console.log(email.match(regexp_e)) 
    },
    validatePhone(){
        if (phone.length <= 25){
            let regexp_ph = new RegExp("[\d\s]", "g")
            console.log(phone.match(regexp_ph))
        }
        else{
            console.log("Invalid number")
        } 
    },
    validatePassword(){
        let regexp_pass = new RegExp("", "")
        console.log(password.match(regexp_pass))
    },   
}   

Validator.validatePhone()
