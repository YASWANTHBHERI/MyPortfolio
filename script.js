var sidemenu = document.getElementById("side-menu");

function openmenu() {
    sidemenu.style.left = "0";
    document.body.style.overflow = "hidden"; // Disable scrolling
}

function closemenu() {
    sidemenu.style.left = "-100%";
    document.body.style.overflow = "auto"; // Enable scrolling
}

function openTab(tabIndex) {
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    tablinks[tabIndex].classList.add("active-link");
    tabcontents[tabIndex].classList.add("active-tab");

    closemenu(); // Close the side menu after clicking on a menu item
}

// Add event listeners to menu items inside the side menu
var menuItems = document.querySelectorAll("#side-menu li a");
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        closemenu(); // Close the side menu after clicking on a menu item
    });
}



//Contact-form validations

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.trim().length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z ]{3,}$/)) {
        nameError.innerHTML = "Name should contain at least 3 characters";
        return false;
    }
    nameError.innerHTML = '';
    return true;
}


function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid email';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value.trim();

    if (message.length === 0 || /^\s*$/.test(message)) {
        messageError.innerHTML = 'Message is required';
        return false;
    }

    messageError.innerHTML = '';
    return true;
}

function validateSubmit() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = 'Please fill all the fields';
        return false;
    }

    return true;
}

document.getElementById('contact-submit').addEventListener('click', function(event) {
    if (!validateSubmit()) {
        event.preventDefault(); // Prevent form submission
    }
});