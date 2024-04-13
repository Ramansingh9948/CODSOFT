let useremail = document.querySelector(".useremail");
let userpass = document.querySelector(".userpass");
let login = document.querySelector(".loginbtn");
let signin = [`"email = ${useremail}", "password = ${userpass}"` ];
login.addEventListener("click", () =>{
       alert(`Your user Email ID is ${useremail.value} and pass is ${userpass.value}.`);
        //alert(`You have not enter any number...`);
});
//  SIGN UP PROCESS
let newuser = [`Name : ${signupname}, email: ${signupemail}, contactno : ${signupcontactno}, pass`];
let signupname = document.querySelector(".signupname");
let signupemail = document.querySelector(".signupemail");
let signupcontactno = document.querySelector(".signupcontactno");
let signuppassword = document.querySelector(".signuppassword");
let signuppasswordpass = document.querySelector(".signuppasswordpassword");
let createaccount = document.querySelector(". createaccount");
if (signuppassword === signuppasswordpass) {
   // alert(`Your user Email ID is ${signupemail.value} and pass is ${signuppasswordpass.value}.`);
    createaccount.addEventListener("click", () =>{
        alert(`Your user Email ID is ${signupemail.value} and pass is ${signuppassword.value}.`);
    });
} 
else {
    alert(`Password does not match...`);
}
let dark = document.querySelector(".nightmode");

dark.addEventListener("click", () =>{
    dark.style.color = "yellow";
});