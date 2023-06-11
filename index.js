function validateEmail(email) {
    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern
    return emailPattern.test(email);
  }
function validateName(name) {
    // Regular expression pattern for name validation
    var namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var nam = name.trim()
    // Test the name against the pattern
    return namePattern.test(nam);
}
var u_name = document.getElementById('name');
u_name.addEventListener("input",function(){
    if(!validateName(u_name.value)){
        document.getElementById("name").nextSibling.textContent="Incorrect Format!";
    }
    else{
        document.getElementById("email").nextSibling.textContent="";
    }
});
var email = document.getElementById('email');
email.addEventListener("input",function(){
    if(!validateEmail(email.value)){
        document.getElementById("email").nextSibling.textContent="Invalid Email!";
    }
    else{
        document.getElementById("email").nextSibling.textContent="";
    }
});

const form = document.getElementById("Form")
document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();

var phone = document.getElementById('phone').value;
var date = document.getElementById('date').value;
var time = document.getElementById('time').value;

var user_details = {
    name:u_name.value,
    phone:phone,
    email:email.value,
    date:date,
    time:time
};
localStorage.setItem('user_details',JSON.stringify(user_details));

console.log('Name : ', u_name.value);
console.log('Phone : ', phone);
console.log('Email : ', email.value);
console.log('Date : ', date);
console.log('Time : ', time);

form.reset()

document.getElementById("submitted").style.display="flex";

});