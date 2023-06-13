function validateEmail(email) {
    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern
    return emailPattern.test(email);
  }
function validateName(name) {
    // Regular expression pattern for name validation
    var namePattern = /^[a-zA-Z]+\d+$/;
    var nam = name.trim()
    // Test the name against the pattern
    return namePattern.test(nam);
}
var u_name = document.getElementById('name');
u_name.addEventListener("input",function(){
    if(!validateName(u_name.value)){
        document.getElementById("name").nextElementSibling.style.display="block";
    }
    else{
        document.getElementById("name").nextElementSibling.style.display="none";
    }
});
var email = document.getElementById('email');
email.addEventListener("input",function(){
    if(!validateEmail(email.value)){
        document.getElementById("email").nextElementSibling.style.display="block";
    }
    else{
        document.getElementById("email").nextElementSibling.style.display="none";
    }
});
const form = document.getElementById("Form")
document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();

var phone = document.getElementById('phone').value;
var date = document.getElementById('date').value;
var time = document.getElementById('time').value;


// Create a new user object
const newUser = {
  name: u_name.value,
  phone: phone,
  email: email.value,
  date: date,
  time: time
};

// Convert the updated data array to a string
const updatedDataString = JSON.stringify(newUser);
// Store the updated string in local storage
localStorage.setItem(newUser.email, updatedDataString);


form.reset();

let i = localStorage.length-1;
const div = document.getElementById("user-data");
let key = localStorage.key(i);
let value = localStorage.getItem(key);
let obj = JSON.parse(value);
let li = document.createElement("li");
li.innerHTML = `${obj.name} ${obj.phone} ${obj.email} ${obj.date} ${obj.time} <button class='delete' data-email="${obj.email}">Delete</button><br><br>`;
div.querySelector('ul').appendChild(li);


let del = document.getElementById('user-data').querySelector('ul');
del.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        let key = e.target.getAttribute('data-email');
        e.target.parentElement.remove();
        localStorage.removeItem(key);        
    }
});

});