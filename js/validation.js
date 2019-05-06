function validateForm() {
    var un = document.forms["form"]["un"].value;
    if (un == "") {
        alert("Please enter a username");
        return false;
    }
    if(isExistUser(un)){
        alert("Sorry, This user name is already taken, choose another one.");
        return false;
    }
    var fn = document.forms["form"]["fn"].value;
    if (fn == "") {
        alert("Please enter your first name");
        return false;
    }
    var pattern = /^[a-zA-Z]*$/;
    if (!pattern.test(fn)) {
        alert("Your first name must contain only letters.");
        return false;
    }
    var ln = document.forms["form"]["ln"].value;
    if (ln == "") {
        alert("Please enter your last name");
        return false;
    }
    if (!pattern.test(ln)) {
        alert("Your last name must contain only letters.");
        return false;
    }
    var pswd = document.forms["form"]["pswd"].value;
    if (pswd == "") {
        alert("Please provide a password");
        return false;
    }
    if (pswd.length < 8) {
        alert("Your password must be at least 8 characters long");
        return false;
    }
    var patternPswd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
    if (!patternPswd.test(pswd)) {
        alert("Your password must conatin at least one letter and one digit");
        return false;
    }
    var email = document.forms["form"]["e"].value;
    if (email == "") {
        alert("Please enter a valid email address");
        return false;
    }
    var bd = document.forms["form"]["bd"].value;
    if (bd == "") {
        alert("Please enter your birthday.");
        return false;
    }
}

function logIn() {
    var un = document.forms["formLogIn"]["unInput"].value;
    var pswd = document.forms["formLogIn"]["pswdInput"].value;
    if (!checkPassword(un, pswd)) {
        alert("The username or password is incorrect.");
        return false;
    }
    else{
        isLoggedIn = true;
        changeInnerHtml("userName", un);
    }
}